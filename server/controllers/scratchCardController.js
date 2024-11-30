const Transaction = require("../model/transactionModel");
const Promoter = require("../model/promoterModel");
const ScratchCard = require("../model/scratchCardModel");

// POST endpoint to create a scratch card
module.exports.addscratchcard = async (req, res) => {
  const { promoterId } = req.body;

  if (!promoterId) {
    return res.status(400).json({ error: "promoterId is required." });
  }

  const promoter = await Promoter.findById(promoterId);
  const currentTime = new Date();

  if (!promoter) {
    return res.status(404).json({ error: "Promoter not found." });
  }

  try {
    if (promoter.resetTime) {
      if (currentTime < promoter.resetTime) {
        if (promoter.todayscCount >= 10) {
          console.log("inside count > 10");
          return res
            .status(400)
            .json({ error: "You have reached the limit for today." });
        } else {
          console.log("inside count < 10");
          await Promoter.findByIdAndUpdate(promoterId, {
            todayscCount: promoter.todayscCount + 1,
          });

          const scratchCard = await ScratchCard.create({
            isRevealed: false,
            points: 0,
            promoter: promoterId,
          });

          res.status(201).json({
            message: `Created a scratchCard with id: ${scratchCard._id}`,
            scratchCard,
          });
        }
      } else {
        console.log("resetting time and count");
        // Update the resetTime to 11:59 PM for today
        await Promoter.findByIdAndUpdate(promoterId, {
          todayscCount: 0, // Reset today's count
          resetTime: new Date().setUTCHours(23, 59, 0, 0), // Set the reset time to today at 11:59 PM
        });

        // Create a new scratch card
        const scratchCard = await ScratchCard.create({
          isRevealed: false,
          points: 0,
          promoter: promoterId,
        });

        // Fetch the promoter again to ensure you get the latest value
        const promoter = await Promoter.findById(promoterId);

        // Increment today's count by 1
        await Promoter.findByIdAndUpdate(promoterId, {
          todayscCount: promoter.todayscCount + 1, // Increment by 1
        });

        res.status(201).json({
          message: `Created a scratchCard with id: ${scratchCard._id}`,
          scratchCard,
        });
      }
    }
  } catch (err) {
    console.error("Error creating scratch card:", err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the scratch card." });
  }
};

// GET endpoint to retrieve scratch cards of a specific user
module.exports.getScratchCardsByUser = async (req, res) => {
  const { promoterId } = req.params;

  if (!promoterId) {
    return res.status(400).json({ error: "promoterId is required." });
  }

  try {
    const scratchCards = await ScratchCard.find({ promoter: promoterId });

    if (!scratchCards.length) {
      return res
        .status(404)
        .json({ error: "No scratch cards found for this promoter." });
    }

    res.status(200).json(scratchCards);
  } catch (err) {
    console.error("Error retrieving scratch cards:", err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the scratch cards." });
  }
};

// Generate a random number between 5 and 50
module.exports.getRandomNumber = () => {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
};

// POST endpoint to open a scratch card
module.exports.openScratchCard = async (req, res) => {
  const { scratchCardId, promoterId } = req.body;

  if (!scratchCardId) {
    return res.status(400).json({ error: "scratchCardId is required." });
  }

  try {
    // Generate a random number for points
    const randomPoints = module.exports.getRandomNumber();

    const scratchCardData = await ScratchCard.findById(scratchCardId);
    if (!scratchCardData) {
      return res.status(404).json({ error: "Scratch card not found." });
    }

    if (scratchCardData.isRevealed || scratchCardData.points !== 0) {
      return res
        .status(400)
        .json({ error: "Scratch card is already revealed." });
    }

    // Find and update the scratch card to reveal it and set points
    const updatedScratchCard = await ScratchCard.findByIdAndUpdate(
      scratchCardId,
      { isRevealed: true, points: randomPoints },
      { new: true }
    );

    if (!updatedScratchCard) {
      return res.status(404).json({ error: "Scratch card not found." });
    }

    const promoter = await Promoter.find({ email: "test@gmail.com" });
    console.log(promoter);

    await Promoter.findByIdAndUpdate(promoterId, {
      $inc: { rewardPoints: randomPoints },
    });

    // Add a transaction for crediting points
    const transaction = await Transaction.create({
      points: randomPoints,
      user: promoterId,
      transactionType: "credit",
      transactionDate: new Date(),
    });

    res.status(200).json({
      message: `You won ${randomPoints} points`,
      updatedScratchCard,
      revealedPoints: randomPoints,
    });
  } catch (err) {
    console.error("Error opening scratch card:", err);
    res
      .status(500)
      .json({ error: "An error occurred while opening the scratch card." });
  }
};
