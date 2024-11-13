import { Counter } from "./_components/counter";
import { Header } from "./_components/header";

export default function Home() {
  console.log("Home","Rendered")

  return (
    <div className="flex flex-col h-screen font-[family-name:var(--font-geist-sans)]">
      <Header/>
      <main className="flex flex-1">
        <Counter/>
      </main>
    </div>
  );
}
