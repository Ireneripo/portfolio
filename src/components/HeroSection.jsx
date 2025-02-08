function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-[100vh] flex flex-col justify-center items-center text-center bg-black text-white px-5">
      <img
        src="/favicon/favicon.svg"
        alt="Memoji avatar"
        className="w-54 h-54 rounded-full"
      />
      <h1 className="text-4xl font-bold mt-5">
        Hi! 👋🏻 I&apos;m Irene Riportella
      </h1>
      <p className="text-lg mt-2">I do Code & Chill 🧉</p>
      <div className="w-full flex justify-center items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/irene-riportella-0992893/"
          className="hover:text-white"
          target="_blank"
        >
          <img
            src="/images/linkedIn-logo.png"
            alt="linkedin logo"
            className="w-7 h-7"
          />
        </a>
        <a
          href="https://github.com/Ireneripo"
          className="hover:text-white"
          target="_blank"
        >
          <img
            src="/images/github-logo.svg"
            alt="linkedin logo"
            className="w-7 h-7"
          />
        </a>
      </div>
      <p className="mt-2 text-gray-400 max-w-lg">
        Passionate developer with a focus on React.
      </p>

      <button
        onClick={scrollToContact}
        className="mt-2 bg-white text-black px-6 py-2 rounded cursor-pointer hover:bg-gray-300 transition"
      >
        Contact Me
      </button>
    </section>
  );
}

export default HeroSection;
