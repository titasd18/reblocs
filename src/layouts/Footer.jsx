const Footer = () => {
  return (
    <footer className="relative py-0 px-6 mx-auto mt-8 mb-20 w-full max-w-[1104px] before:absolute before:top-0 before:left-6 before:right-6 h-[1px] before:bg-[#E5E5E5] before:box-border">
      <div className="flex justify-between flex-wrap pt-12">
        <img src="/logo.svg" alt="brand logo" className="w-32 h-auto" />
        <div className="flex gap-8">
          <a
            href="/"
            className="text-[#222222] font-medium text-sm tracking-normal relative"
          >
            Sign up
          </a>
          <a
            href="/"
            className="text-[#222222] font-medium text-sm tracking-normal relative"
          >
            Quiz
          </a>
          <a
            href="/"
            className="text-[#222222] font-medium text-sm tracking-normal relative"
          >
            Contact
          </a>
        </div>
        <div className="flex">
          <span className="inline-block overflow-hidden w-[initial] h-[initial] box-border bg-none opacity-100 border-none m-0 p-0 max-w-full relative">
            <img
              src="/mail.svg"
              alt=""
              className="box-border p-0 border-none m-auto w-[18px] h-[18px] inline-block align-[-1px]"
            />
          </span>
          <a
            href="mailto:hello@reblocs.co"
            className="text-[#222222] text-sm font-medium tracking-normal relative ml-3"
          >
            hello@reblocs.co
          </a>
        </div>
        <div className="flex gap-1">
          <p className="text-[#757575] text-sm mr-4">follow us</p>
          <a href="/" className="h-6 w-6">
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <g
                id="icons/social/fb"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <rect id="ViewBox" x="0" y="0" width="24" height="24"></rect>
                <path
                  d="M12,0 C5.3725,0 0,5.3725 0,12 C0,18.6275 5.3725,24 12,24 C18.6275,24 24,18.6275 24,12 C24,5.3725 18.6275,0 12,0 Z M14.7288,8.4408 L12.9972,8.4408 C12.792,8.4408 12.564,8.7108 12.564,9.0696 L12.564,10.32 L14.73,10.32 L14.4024,12.1032 L12.564,12.1032 L12.564,17.4564 L10.5204,17.4564 L10.5204,12.1032 L8.6664,12.1032 L8.6664,10.32 L10.5204,10.32 L10.5204,9.2712 C10.5204,7.7664 11.5644,6.5436 12.9972,6.5436 L14.7288,6.5436 L14.7288,8.4408 L14.7288,8.4408 Z"
                  id="Shape"
                  fill="#222222"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/" className="h-6 w-6">
            <svg
              className="insta"
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>icons/social/insta</title>
              <g
                id="Style-Guide"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Reblocs---Style-Guide"
                  transform="translate(-428.000000, -7728.000000)"
                >
                  <g
                    id="Group-20"
                    transform="translate(172.000000, 7507.000000)"
                  >
                    <g
                      id="icons/social/insta"
                      transform="translate(256.000000, 221.000000)"
                    >
                      <rect
                        id="ViewBox"
                        x="0"
                        y="0"
                        width="32"
                        height="32"
                      ></rect>
                      <circle
                        id="Oval"
                        fill="#222222"
                        cx="16"
                        cy="16"
                        r="16"
                      ></circle>
                      <path
                        d="M15.9978497,13.3320983 C14.5288846,13.3320983 13.3300969,14.5308859 13.3300969,15.9998511 C13.3300969,17.4688162 14.5288846,18.6676039 15.9978497,18.6676039 C17.4668149,18.6676039 18.6656026,17.4688162 18.6656026,15.9998511 C18.6656026,14.5308859 17.4668149,13.3320983 15.9978497,13.3320983 Z M23.9991069,15.9998511 C23.9991069,14.8951252 24.0091134,13.800406 23.9470727,12.6976814 C23.8850319,11.4168399 23.5928399,10.280093 22.6562245,9.3434776 C21.7176078,8.40486089 20.5828623,8.11467023 19.3020207,8.05262946 C18.1972949,7.9905887 17.1025756,8.00059528 15.9998511,8.00059528 C14.8951252,8.00059528 13.800406,7.9905887 12.6976814,8.05262946 C11.4168399,8.11467023 10.280093,8.40686221 9.3434776,9.3434776 C8.40486089,10.2820943 8.11467023,11.4168399 8.05262946,12.6976814 C7.9905887,13.8024073 8.00059528,14.8971265 8.00059528,15.9998511 C8.00059528,17.1025756 7.9905887,18.1992962 8.05262946,19.3020207 C8.11467023,20.5828623 8.40686221,21.7196091 9.3434776,22.6562245 C10.2820943,23.5948412 11.4168399,23.8850319 12.6976814,23.9470727 C13.8024073,24.0091134 14.8971265,23.9991069 15.9998511,23.9991069 C17.1045769,23.9991069 18.1992962,24.0091134 19.3020207,23.9470727 C20.5828623,23.8850319 21.7196091,23.5928399 22.6562245,22.6562245 C23.5948412,21.7176078 23.8850319,20.5828623 23.9470727,19.3020207 C24.0111147,18.1992962 23.9991069,17.1045769 23.9991069,15.9998511 Z M15.9978497,20.104548 C13.7263573,20.104548 11.8931528,18.2713435 11.8931528,15.9998511 C11.8931528,13.7283586 13.7263573,11.8951541 15.9978497,11.8951541 C18.2693422,11.8951541 20.1025467,13.7283586 20.1025467,15.9998511 C20.1025467,18.2713435 18.2693422,20.104548 15.9978497,20.104548 Z M20.2706571,12.6856743 C19.7403087,12.6856743 19.3120273,12.2573921 19.3120273,11.7270437 C19.3120273,11.1966952 19.7403087,10.7684138 20.2706571,10.7684138 C20.8010056,10.7684138 21.2292877,11.1966952 21.2292877,11.7270437 C21.2296062,11.9813858 21.1287105,12.2254026 20.9488633,12.4052498 C20.769016,12.585097 20.5249993,12.6859927 20.2706571,12.6856743 L20.2706571,12.6856743 Z"
                        id="Shape"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a href="/" className="h-6 w-6">
            <svg width="24px" height="24px" viewBox="0 0 24 24">
              <g
                id="icons/social/linked"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <rect id="ViewBox" x="0" y="0" width="24" height="24"></rect>
                <path
                  d="M12,0 C5.3725,0 0,5.3725 0,12 C0,18.6275 5.3725,24 12,24 C18.6275,24 24,18.6275 24,12 C24,5.3725 18.6275,0 12,0 Z M9.18,16.7748 L6.8472,16.7748 L6.8472,9.2676 L9.18,9.2676 L9.18,16.7748 Z M7.9992,8.346 C7.2624,8.346 6.786,7.824 6.786,7.1784 C6.786,6.5196 7.2768,6.0132 8.0292,6.0132 C8.7816,6.0132 9.2424,6.5196 9.2568,7.1784 C9.2568,7.824 8.7816,8.346 7.9992,8.346 Z M17.7,16.7748 L15.3672,16.7748 L15.3672,12.6144 C15.3672,11.646 15.0288,10.9884 14.1852,10.9884 C13.5408,10.9884 13.158,11.4336 12.9888,11.862 C12.9264,12.0144 12.9108,12.2304 12.9108,12.4452 L12.9108,16.7736 L10.5768,16.7736 L10.5768,11.6616 C10.5768,10.7244 10.5468,9.9408 10.5156,9.2664 L12.5424,9.2664 L12.6492,10.3092 L12.696,10.3092 C13.0032,9.8196 13.7556,9.0972 15.0144,9.0972 C16.5492,9.0972 17.7,10.1256 17.7,12.336 L17.7,16.7748 L17.7,16.7748 Z"
                  id="Shape"
                  fill="#222222"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex justify-between flex-wrap pt-12">
        <p className="text-[#757575] text-sm">
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Copyright </font>
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>2024 </font>
          </font>
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>
              © Reblocs. All rights reserved.
            </font>
          </font>
        </p>
        <a
          href="/"
          className="text-[#222222] font-medium text-sm tracking-normal relative"
        >
          <font style={{ verticalAlign: "inherit" }}>
            <font style={{ verticalAlign: "inherit" }}>Privacy Policy</font>
          </font>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
