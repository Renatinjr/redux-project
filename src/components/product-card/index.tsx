import Image from "next/image";
import imageTeste from "../../assets/images/iT.jpg";
import Button from "../button";
export default function CardIten() {
  return (
    <section className="flex flex-col gap-3 items-center bg-zinc-700 rounded-md w-32 p-3">
      <div className="w-28">
        <Image src={imageTeste} className="w-full h-full" alt="Product image" />
      </div>

      <div className="text-white">
        <h3>Product Name</h3>
        <h3>Price</h3>
      </div>
      <Button className=" w-full bg-blue-700 px-3 py-1 rounded-sm font-bold">
        <span className="text-white">Buy</span>
      </Button>
    </section>
  );
}
