const Footer = () => {
  return (
    <footer className="block my-0 py-0 px-6 mx-auto mt-8 mb-20 w-full before:absolute before:top-0 before:left-6 before:right-6 h-[1px] before:bg-[#E5E5E5] before:box-border relative ">
      <div className="flex justify-between flex-wrap pt-12">
        <img src="/logo.svg" alt="brand logo" className="w-32 h-auto" />
        <div className="flex gap-8">
          <a
            href="/"
            className="text-black font-medium text-sm tracking-normal relative"
          >
            Sign up
          </a>
          <a
            href="/"
            className="text-black font-medium text-sm tracking-normal relative"
          >
            Quiz
          </a>
          <a
            href="/"
            className="text-black font-medium text-sm tracking-normal relative"
          >
            Contact
          </a>
        </div>
        <div className="flex"></div>
      </div>
      <div className="flex justify-between flex-wrap pt-12"></div>
    </footer>
  );
};

export default Footer;
