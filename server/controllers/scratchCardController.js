const Promoter = require("../model/authmodel");
const ScratchCard = require("../model/scratchCardModel");

// POST endpoint to create a scratch card
module.exports.addscratchcard = async (req, res) => {
  const { promoterId } = req.body;

  if (!promoterId) {
    return res.status(400).json({ error: "promoterId is required." });
  }

  try {
    const scratchCard = await ScratchCard.create({
      isRevealed: false,
      points: 0,
      promoter: promoterId,
    });

    await Promoter.findByIdAndUpdate(promoterId, {
      $push: { scratchCards: scratchCard._id },
    });

    res.status(201).json({
      message: `Created a scratchCard with id: ${scratchCard._id}`,
      scratchCard,
    });
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
  const { scratchCardId } = req.body;

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

    res
      .status(200)
      .json({
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
