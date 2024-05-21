import Filtering from "@/components/Filtering/Filtering";
import PopularProductsCard from "@/components/ui/PopularProductsCard";
import { TProduct } from "@/types";
import { Checkbox } from "@nextui-org/checkbox";
import { Select, SelectItem } from "@nextui-org/react";

type TProductSearchParams = {
  searchParams: {
    category: string;
  }
}

const AllProducts = async ({ searchParams } : TProductSearchParams) => {
  let products = [];

  // For get all data or filter by category
  if (!searchParams || !searchParams.category) {
    const res = await fetch("https://grocery-store-server-red.vercel.app/fish");
    products = await res.json();
  } else {
    const filter = await fetch(
      `https://grocery-store-server-red.vercel.app/fish/${searchParams.category}`
    );
    products = await filter.json();
  }

  return (
    <div className="w-[90%] mx-auto">
      <Filtering products={products.data} />
    </div>
  );
};

export default AllProducts;
