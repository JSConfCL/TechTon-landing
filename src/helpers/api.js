export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.jschile.org/graphql";
const DATE = "2024-02-05T00:00:00.000Z";
const graphqlQuery = {
  query: `
    query q {
      searchPaymentLogs(input: {startDate: "${DATE}"}) {
        id
        currencyId
        platform
        transactionAmount
        transactionDate
      }
      searchConsolidatedPaymentLogs(input: {startDate: "${DATE}"}) {
        id
        currencyId
        totalTransactionAmount
        platform
      }
    }
  `,
};

export const getTransactions = async () => {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphqlQuery),
  })
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => console.error("Error:", error));
};
