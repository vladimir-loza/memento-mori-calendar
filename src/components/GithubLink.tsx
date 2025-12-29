export const GithubLink = () => {
  return (
    <a
      href="https://github.com/vladimir-loza/memento-mori-calendar"
      target="_blank"
      className="fixed top-2 left-2 sm:left-4 sm:top-4 z-50 inline-block transition-opacity hover:opacity-80"
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