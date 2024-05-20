import { TProduct } from "@/types";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import { Star } from "lucide-react";
import Link from "next/link";

const PopularProductsCard = ({product}: {product: TProduct}) => {
    return (
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start relative">
          <Image
              alt="Card background"
              className="object-cover rounded-xl z-0 w-full"
              src={product.image}
            />
            <p className="absolute text-tiny top-3 right-5 z-50 bg-white rounded-2xl p-1 font-semibold">{product.discountPercent}%</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-xl">{product.title}</h4>
              <div className="flex items-center gap-1">
                <Star /> 
                <span className="font-semibold">{product.ratings}</span>
              </div> 
            </div>


            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                  <p className=" text-red-400 font-medium mt-1 line-through">${product.price}</p>
                  <p className=" font-medium mt-1">${product.discountPrice}</p>
              </div>
              <Link href={`/fish/${product._id}`}>
              <Button color="primary" variant="bordered" size="md">
                Details
              </Button>
            </Link>
            </div>
          </CardBody>
        </Card>
    );
};

export default PopularProductsCard;