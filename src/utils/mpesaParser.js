export function parseMpesaSMS(text) {
  const lines = text.split("\n");

  const transactions = [];

  lines.forEach((line) => {
    const clean = line.toLowerCase();

    const amountMatch = line.match(/ksh\s?([\d,]+)/i);
    if (!amountMatch) return;

    const amount = Number(amountMatch[1].replace(/,/g, ""));

    // =========================
    // 1. INCOME
    // =========================
    if (clean.includes("received") || clean.includes("you have received")) {
      const nameMatch = line.match(/from\s+([a-zA-Z\s]+)/i);

      transactions.push({
        type: "income",
        category: "income",
        amount,
        name: nameMatch ? nameMatch[1].trim() : "unknown",
        raw: line,
      });

      return;
    }

    // =========================
    // 2. PAYBILL
    // =========================
    if (clean.includes("paid to") && clean.includes("paybill")) {
      const nameMatch = line.match(/paid to\s+([a-zA-Z0-9\s]+)/i);

      transactions.push({
        type: "expense",
        category: "paybill",
        amount,
        name: nameMatch ? nameMatch[1].trim() : "paybill",
        raw: line,
      });

      return;
    }

    // =========================
    // 3. BUY GOODS / SERVICES
    // =========================
    if (clean.includes("buy goods") || clean.includes("purchase")) {
      const nameMatch = line.match(/to\s+([a-zA-Z0-9\s]+)/i);

      transactions.push({
        type: "expense",
        category: "buy_goods",
        amount,
        name: nameMatch ? nameMatch[1].trim() : "merchant",
        raw: line,
      });

      return;
    }

    // =========================
    // 4. AIRTIME
    // =========================
    if (clean.includes("airtime")) {
      transactions.push({
        type: "expense",
        category: "airtime",
        amount,
        name: "airtime",
        raw: line,
      });

      return;
    }

    // =========================
    // 5. SENT MONEY (DEFAULT EXPENSE)
    // =========================
    if (clean.includes("sent to")) {
      const nameMatch = line.match(/sent to\s+([a-zA-Z\s]+)/i);

      transactions.push({
        type: "expense",
        category: "transfer",
        amount,
        name: nameMatch ? nameMatch[1].trim() : "unknown",
        raw: line,
      });

      return;
    }
  });

  return transactions;
}