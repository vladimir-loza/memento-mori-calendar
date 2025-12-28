export const GithubLink = () => {
  return (
    <a
      href="https://github.com/vladimir-loza/memento-mori-calendar"
      target="_blank"
      className="fixed top-4 left-4 z-50 inline-block transition-opacity hover:opacity-80"
      aria-label="Ver repositorio en GitHub"
    >
      <img
        src="/github-mark.svg"
        alt="GitHub"
        className="size-6"
      />
    </a>
  );
};