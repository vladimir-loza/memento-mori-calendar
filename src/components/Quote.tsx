export const Quote = () => {
  return (
    <blockquote className="w-1/3 mx-auto text-white">
      <p className="text-base-content text-lg text-foreground italic text-center">
        <em>
          &quot;No es que tengamos poco tiempo, sino que perdemos mucho.&quot;
        </em>
      </p>
      <footer className="text-right">
        <div className="text-base font-semibold opacity-70">Séneca</div>
      </footer>
    </blockquote>
  )
  // return (
  //   <blockquote className="text-center text-white w-1/4 mx-auto">
  //     <p className="text-base sm:text-lg md:text-xl font-display font-thin tracking-wide text-foreground mb-3 italic">
  //       &quot;No es que tengamos poco tiempo, sino que perdemos mucho.&quot;
  //     </p>
  //     <p className="text-xs sm:text-sm md:text-base font-display font-thin tracking-wide text-foreground mb-3 text-right">
  //       - Séneca
  //     </p>
  //   </blockquote>
  // );
};
