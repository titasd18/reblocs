import ActionButton from "../components/ActionButton";

const Header = () => {
  return (
    <div id="header" className="h-[125px]">
      <header className="fixed flex justify-between items-center w-full gap-6 bg-white py-[36px] px-[64px] top-0 left-0 z-[1000] my-0 mx-auto">
        {/** Brand Logo */}
        <a href="/">
          <span className="inline-block box-border overflow-hidden w-[initial] h-[initial] bg-none opacity-100 m-0 p-0 relative max-w-full">
            <img
              className="box-border p-0 border-none m-auto block w-[160px] h-[25px]"
              src="/logo.svg"
              alt="brand logo"
            />
          </span>
        </a>
        {/** Navbar */}
        <nav className="flex items-center m-auto gap-12">
          <a
            href="/"
            className="text-[#222222] text-base tracking-normal relative"
          >
            Home
          </a>
          <a
            href="/"
            className="text-[#222222] text-base tracking-normal relative"
          >
            Small house owner
          </a>
          <a
            href="/"
            className="text-[#222222] text-base tracking-normal relative"
          >
            Investor
          </a>
          <a
            href="/"
            className="text-[#222222] text-base tracking-normal relative"
          >
            Quiz
          </a>
          <a
            href="/"
            className="text-[#222222] text-base tracking-normal relative"
          >
            Contact
          </a>
          <ActionButton
            title={"I am interested!"}
            customClass={
              "min-w-[182.5px] text-base px-6 py-3 bg-[#222222] border-black text-white hover:bg-[#EEFF32] hover:border-[#EEFF32] hover:text-[#222222]"
            }
          />
        </nav>
      </header>
    </div>
  );
};

export default Header;
