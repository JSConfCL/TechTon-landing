import { getDollarCurrency } from "@/helpers/api";
import { useEffect, useState } from "react";

export default function TotalAmount({
  donationsInDollar,
  donationsInClp,
  isLoading,
}) {
  const [total, setTotal] = useState(null);
  const [dollar, setDollar] = useState(957);

  useEffect(() => {
    async function getTotal() {
      const dollarCurrency = await getDollarCurrency();

      const totalInDollar = (donationsInDollar / 100) * dollarCurrency;
      const totalAmount = donationsInClp + totalInDollar;
      const formatAmount = new Intl.NumberFormat("es-Es", {
        style: "currency",
        currency: "CLP",
      }).format(totalAmount);

      setTotal(formatAmount);
      setDollar(dollarCurrency);
    }

    getTotal();
  }, [donationsInClp, donationsInDollar]);

  return (
    <>
      {!isLoading && (
        <span className="text-5xl font-bold chilean-gradients-colors">
          {total}
        </span>
      )}
      <div className="text-[#333]">
        Esto es un aproximado. Tomando en cuenta el cambio del día. Valor USD:
        {Math.floor(dollar)} Pesos Chilenos. Pueden haber fees en las
        conversiones.
      </div>
    </>
  );
}
