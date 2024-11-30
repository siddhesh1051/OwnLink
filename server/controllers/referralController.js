// Import the addscratchcard function

const { addscratchcard } = require("./scratchCardController");

// POST endpoint to count referrals
module.exports.countReferrals = async (req, res) => {
  const { ref_id } = req.body;

  if (!ref_id) {
    return res.status(400).json({ error: "ref_id is required." });
  }

  try {
    // Call the addscratchcard function with the ref_id
    const addscratchCardResponse = await addscratchcard({
      body: { promoterId: ref_id },
    });

    // If the response from addscratchcard contains an error, return it
    if (addscratchCardResponse && addscratchCardResponse.error) {
      return res.status(400).json({ error: addscratchCardResponse.error });
    }

    // You can add any further response logic here, if needed
    return res.status(200).json({ message: "Referral counted successfully." });
  } catch (err) {
    console.error("Error counting referrals:", err);
    res
      .status(500)
      .json({ error: "An error occurred while counting referrals." });
  }
};
