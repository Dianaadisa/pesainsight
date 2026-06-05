const express = require("express");
const router = express.Router();
const pool = require("../db");

// test insert transaction
router.post("/add", async (req, res) => {
  try {
    const { type, amount, category, rawSms } = req.body;

    const result = await pool.query(
      `INSERT INTO transactions (type, amount, category, raw_sms)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [type, amount, category, rawSms]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;