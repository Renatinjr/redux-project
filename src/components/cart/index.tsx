import { AiFillCloseCircle } from "react-icons/ai";
import Button from "../button";
import ImageTeste from "../../assets/images/iT.jpg";
import CartItem from "./components/cart-iten";

export default function Cart() {
  return (
    <aside className="absolute right-0 z-20  bg-zinc-700  w-3/6 h-screen">
      <Button className="mt-3 ml-3">
        <AiFillCloseCircle className="fill-white " size={38} />
      </Button>

      <section className="flex flex-col gap-3 overflow-y-scroll">
        <CartItem
          image={ImageTeste}
          productName="tetste carrinho"
          price="12,00"
        />
      </section>
    </aside>
  );
}
