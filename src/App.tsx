import {
  Header,
  LifeTimeGrid,
  Quote,
  LanguageSwitcher,
  GithubLink,
} from "./components";

function App() {
  return (
    <main className="bg-[#111317] min-h-screen flex flex-col gap-1">
      <GithubLink />
      <LanguageSwitcher />
      <Header />
      <Quote />
      <LifeTimeGrid />
    </main>
  );
}

export default App;
