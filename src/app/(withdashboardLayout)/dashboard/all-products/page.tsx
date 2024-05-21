"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { Star } from "lucide-react";
import { TProduct } from "@/types";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://grocery-store-server-red.vercel.app/fish"
      );
      const data = await res.json();
      setProducts(data.data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Button color="primary" isLoading>
        Loading
      </Button>
    );
  }

  return (
    <Table aria-label="Our all Products">
      <TableHeader>
        <TableColumn>IMAGE</TableColumn>
        <TableColumn>TITLE</TableColumn>
        <TableColumn>CATEGORY</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>RATINGS</TableColumn>
      </TableHeader>
      <TableBody>
        {products.length > 0 ? (
          products.map((product: TProduct, index) => (
            <TableRow key={product._id || index}>
              <TableCell>
                <Image
                  className="rounded-lg font-semibold"
                  height={80}
                  width={80}
                  src={product.image}
                  alt="Image"
                />
              </TableCell>
              <TableCell className="font-semibold">{product.title}</TableCell>
              <TableCell className="font-semibold">
                {product.category}
              </TableCell>
              <TableCell className="font-semibold">${product.price}</TableCell>
              <TableCell className="font-semibold flex items-center gap-2">
                {product.ratings}
                <Star />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3}>No products available</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default AllProducts;
