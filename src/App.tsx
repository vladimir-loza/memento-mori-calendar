import { Header, LifeTimeGrid, Quote } from "./components";

function App() {
  return (
    <main className="bg-[#111317] min-h-screen flex flex-col gap-1">
      <Header />
      <Quote />
      <LifeTimeGrid />
    </main>
  );
}

export default App;
