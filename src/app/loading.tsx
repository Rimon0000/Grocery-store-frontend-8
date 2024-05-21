import { Button } from "@nextui-org/button";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="m-10 mt-20 flex place-content-center mx-auto">
      <Button color="primary" isLoading>Loading</Button>
      <Button className="mx-5" color="primary" isLoading>Loading</Button>
      <Button color="primary" isLoading>Loading</Button>
      </div>
      <div>
      <Image
        src="https://i.stack.imgur.com/hzk6C.gif"
        width={500}
        height={500}
        alt="loading"
        className="w-96 mx-auto"
      />
      </div>
    </div>
  );
};

export default LoadingPage;
