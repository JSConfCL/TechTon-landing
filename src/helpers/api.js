export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.jschile.org/graphql";
const SPECIAL_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSx9_AO3FFM9QN4QKgxcueQvmpfE8L4Z3CBlqJ3uGQ1EJaG9Nt9Nm-lafR_30Aj5wnvd58gpqn47u8Z/pub?output=tsv'
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

export const getSpecialDonations = async () => {
  const csv = await fetch(SPECIAL_URL)
    .then(res => res.text())

  return csv
    .split('\n')
    .slice(1)
    .map(row => {
      const [title, donation] = row.split('\t')
      const parsedRow = { title, donation: +donation.replace('\r', '') }

      return parsedRow
    })
}

export async function getDollarCurrency() {
  const res = await fetch("https://mindicador.cl/api/dolar");
  const data = await res.json();
  const lastPossibleValue = data?.serie[0].valor;

  return lastPossibleValue;
}