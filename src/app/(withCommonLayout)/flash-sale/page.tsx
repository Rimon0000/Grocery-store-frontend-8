import FlashSaleCard from "@/components/ui/FlashSaleCard";
import { TFlashSale } from "@/types";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch(
    "https://grocery-store-server-red.vercel.app/flash-sale",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const flashSales = await res.json();

  return (
    <div className="w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
        {flashSales?.data?.map((flashSale: TFlashSale) => (
          <FlashSaleCard key={flashSales._id} flashSale={flashSale} />
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
