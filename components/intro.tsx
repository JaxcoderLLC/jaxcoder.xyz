const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {"<jaxcoder />"}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Let&apos;s chat about web3 technology{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        ></a>
      </h4>
    </section>
  );
};

export default Intro;
