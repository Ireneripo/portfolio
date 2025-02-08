function Footer() {
  return (
    <footer className="py-10 bg-black text-gray-400 text-center">
      <p className="py-6">Built with React & Tailwind.</p>
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
      <div className="px-1 py-1 text-sm">
        <a
          href="https://www.flaticon.com/free-icons/development"
          title="development icons"
        >
          Development icons created by popcornarts - Flaticon
        </a>
      </div>
    </footer>
  );
}

export default Footer;

/*
Photo by <a href="https://unsplash.com/@metelevan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Andrey Metelev</a> on <a href="https://unsplash.com/photos/red-white-yellow-and-blue-plastic-dice-DEuansgqjns?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@suhashvilluri?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Suhash Villuri</a> on <a href="https://unsplash.com/photos/brown-bread-on-brown-woven-basket-GXV8HgWIPLo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
