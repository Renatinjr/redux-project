import Header from "@/components/header";
import RootLayout from "../layout";
import CardIten from "@/components/product-card";
import CardGrid from "@/components/card-grid";
import Modal from "@/components/modal/idndex";
import Cart from "@/components/cart";

export default function App() {
  return (
    <RootLayout>
      <section className="w-screen h-screen flex flex-col bg-zinc-800 relative z-10">
        <Header />
        <main className="mt-2  self-center">
          <CardGrid>
            <CardIten />
            <CardIten />
            <CardIten />
            <CardIten />
          </CardGrid>

          <Modal chilren={<Cart />} />
        </main>
      </section>
    </RootLayout>
  );
}
