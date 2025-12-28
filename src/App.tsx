import { Header, LifeTimeGrid, Quote, LanguageSwitcher } from "./components";

function App() {
  return (
    <main className="bg-[#111317] min-h-screen flex flex-col gap-1">
      <LanguageSwitcher />
      <Header />
      <Quote />
      <LifeTimeGrid />
    </main>
  );
}

export default App;
