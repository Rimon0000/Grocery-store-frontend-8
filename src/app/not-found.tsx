import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-[60%] mx-auto p-10">
      <Image
        src="https://i.ibb.co/6X7NSJW/error.jpg"
        width={400}
        height={400}
        alt="not found page"
        className="rounded-lg w-full mb-10"
      />

       <Link className="mx-auto" href="/"><Button className="mx-auto flex justify-center" color="primary" variant="bordered"> HOME TO HOME</Button></Link>
    </div>
  );
};

export default NotFoundPage;

