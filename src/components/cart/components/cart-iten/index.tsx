import Button from "@/components/button";
import Image, { StaticImageData } from "next/image";

type CartItemProps = {
  image: StaticImageData;
  productName: string;
  price: string;
};

export default function CartItem({ image, price, productName }: CartItemProps) {
  return (
    <div className="flex justify-between items-center w-full min-h-20 p-2 gap-2">
      <div className="w-20">
        <Image alt="Imagem do carrinho" className="" src={image} />
      </div>
      <div>
        <h3>{productName}</h3>
        <h3>{price}</h3>
      </div>
      <Button className="h-full w-28 flex justify-center items-center bg-green-500 rounded-md">
        <span className="text-white font-bold uppercase">Finalizar</span>
      </Button>
    </div>
  );
}
