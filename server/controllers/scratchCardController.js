const Promoter = require("../model/authmodel");
const ScratchCard = require("../model/scratchCardModel");

// POST endpoint to create a scratch card
module.exports.addscratchcard = async (req, res) => {
  const { promoterId, points } = req.body;

  if (!promoterId || points == null) {
    return res
      .status(400)
      .json({ error: "promoterId and points are required." });
  }

  try {
    const scratchCard = await ScratchCard.create({
      isRevealed: false,
      points,
      promoter: promoterId,
    });

    await Promoter.findByIdAndUpdate(promoterId, {
      $push: { scratchCards: scratchCard._id },
    });

    res.status(201).json(scratchCard);
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
