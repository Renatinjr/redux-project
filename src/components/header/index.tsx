import { BsFillCartCheckFill } from "react-icons/bs";

export default function Header() {
  return (
    <header className="bg-zinc-700 w-full h-14 flex justify-between items-center px-3">
      <div className="w-auto">
        <h2 className="text-white font-bold text-xl">Buy store</h2>
      </div>

      <button className="fill-">
        <BsFillCartCheckFill className="fill-white max-h-10 w-8 " />
      </button>
    </header>
  );
}
