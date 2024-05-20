import { TCategory } from "@/types";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import Link from "next/link";

const CategoryCard = ({category}:{category: TCategory}) => {

  
    return (
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none"
        >
          <Image
            alt="Woman listing to music"
            className="object-cover w-full"
            height={200}
            src={category.image}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny font-bold text-white">{category.category}</p>
            <Link href={`/fish?category=${category.category}`}>
              <Button className="text-tiny text-white bg-black" variant="flat" color="default" radius="lg" size="sm">
                Check Out
              </Button>
            </Link>
          </CardFooter>
        </Card>
    );
};

export default CategoryCard;