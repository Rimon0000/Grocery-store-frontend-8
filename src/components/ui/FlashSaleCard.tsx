import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const FlashSaleCard = ({flashSale}: {flashSale: TFlashSale}) => {
    return (
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={flashSale.image}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <h4 className="font-semibold text-xl">{flashSale.title}</h4>
            <p className="text-lg text-red-400 font-medium mt-1">${flashSale["discount-price"]}</p>
            <div className="flex text-lg font-medium gap-2 items-center">
            <small className="text-default-500 line-through">${flashSale.price}</small>
            <small className="text-default-500">-{flashSale["discount-percent"]}%</small>
            </div>
          </CardBody>
        </Card>
    );
};

export default FlashSaleCard;