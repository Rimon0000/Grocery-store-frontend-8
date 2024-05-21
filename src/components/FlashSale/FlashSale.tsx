import FlashSaleCard from "@/components/ui/FlashSaleCard";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import CountdownTimer from "../FlashSale/Timer";
import { TFlashSale } from "@/types";

const FlashSalePage = async () => {
  const threeHoursInMilliseconds = 3 * 60 * 60 * 1000;

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
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Flash Sale</h1>
        <div className="flex items-center gap-2 font-bold text-lg">
          <p>Ending in:</p>
          <CountdownTimer duration={threeHoursInMilliseconds} />
        </div>
        <Link href="/flash-sale">
          <Button
            color="danger"
            variant="bordered"
            endContent={<ChevronRight />}
          >
            See All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
        {flashSales?.data?.slice(0, 4).map((flashSale: TFlashSale) => (
          <FlashSaleCard key={flashSales._id} flashSale={flashSale} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;
