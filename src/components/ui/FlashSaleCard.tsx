import { TFlashSale } from "@/types";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const FlashSaleCard = ({flashSale}: {flashSale: TFlashSale}) => {
    return (
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start relative">
          <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src={flashSale.image}
            />
            <p className="absolute text-tiny top-3 right-5 z-50 bg-white rounded-2xl p-1 font-semibold">{flashSale.discountPercent}%</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h4 className="font-semibold text-xl">{flashSale.title}</h4>
            <div className="flex items-center gap-2">
                <p className=" text-red-400 font-medium mt-1 line-through">${flashSale.price}</p>
                <p className=" font-medium mt-1">${flashSale.discountPrice}</p>
            </div>
          </CardBody>
        </Card>
    );
};

export default FlashSaleCard;