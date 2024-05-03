import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import ActionButton from "./components/ActionButton";
import SignUpForm from "./layouts/SignUpForm";
import OwnerCard from "./layouts/OwnerCard";
import FormInput from "./components/FormInput";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        {/** Hero Section 1 */}
        <div className="overflow-x-clip">
          <section className="grid grid-cols-12 gap-x-6 items-center mt-12 relative mb-0 mx-auto max-w-[1320px] py-0 px-6">
            <div className="max-w-[365px] w-full col-start-2 col-end-5 row-start-1 relative mb-[72px]">
              <h1
                className="text-[#222222] text-[42px] font-thin leading-[53px]"
                // style="line-height:53px"
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Free up your detached house capital or invest in detached
                    houses
                  </font>
                </font>
              </h1>
              <div>
                <p className="mt-12 text-lg font-light">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Reblocs is building a unique marketplace that gives you
                      access to your tied-up home equity or allows you to invest
                      in single-family homes (or both). Do you want to be
                      involved from the start? Take our test here to see if
                      Reblocs is for you and get on the waiting list.
                    </font>
                  </font>
                </p>
                <ActionButton
                  title={"Take the test here!"}
                  customClass={
                    "mt-16 text-base px-6 py-3 bg-white border border-solid border-[#E5E5E5] text-[#222222] hover:bg-[#222222] hover:border-black hover:text-[#EEFF32]"
                  }
                />
              </div>
            </div>
            <SignUpForm />
          </section>
        </div>
        {/** Section 2 */}
        <section className="mx-auto mt-40 mb-0 max-w-[900px] w-full px-6 py-0">
          <p className="text-[#757575] text-base">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                How does it happen
              </font>
            </font>
          </p>
          <p className="mt-8 max-w-[624px] text-[25px] font-medium">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Reblocs frees up the tied-up housing values of single-family
                home owners and makes it an investable asset - without putting a
                finger on ownership.
              </font>
            </font>
          </p>
          <div className="flex justify-between mt-[120px] gap-24">
            <OwnerCard
              buttonTitle={"I am an villa owner"}
              img={"/homeowner.svg"}
              text={
                "Reblocs give you access to the capital locked up in your home by letting you sell off parts of the value. You retain 100% ownership and pay no interest or rent."
              }
            />
            <OwnerCard
              buttonTitle={"I am an investor"}
              img={"/investor.svg"}
              text={
                "Invest a penny in expensive turn-of-the-century villas, millions in Scanian townhouses or whatever amounts you want in other types of detached houses. When the home rises in value, so does your investment."
              }
            />
          </div>
        </section>
        {/** Section 3 */}
        <div className="overflow-hidden">
          <section className="grid grid-cols-12 gap-6 items-center mx-auto mt-[160px] mb-0 max-w-[1320px] w-full py-0 px-6">
            <div style={{ gridColumn: "2 / span 5" }}>
              <div className="relative">
                <img
                  src="/about.webp"
                  alt=""
                  className="w-[516px] h-[490px] max-w-[516px]"
                />
                <div className="-z-[1] absolute bg-[#EEFF32] w-screen h-[80%] top-[10%] left-[initial] right-[40%]"></div>
              </div>
            </div>
            <div style={{ gridColumn: "8 / span 4" }}>
              <p className="text-[#757575] text-[15px]">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>About us</font>
                </font>
              </p>
              <p className="my-8 text-[#222222] text-[32px] font-medium leading-[35px]">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Set the housing market free!
                  </font>
                </font>
              </p>
              <p>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    We think it is backwards that the lion&apos;s share of many
                    home owners capital is tied up, not only in a single asset
                    class, but also in a single object within the asset class -
                    our homes. We also think it is wrong that the detached house
                    market cannot be invested in in other ways than buying
                    entire properties.{" "}
                  </font>
                </font>
                <br />
                <br />
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Our vision is to unlock the single-family home market so
                    that home owners can sell parts of the value and let others
                    invest in the value shares. This creates opportunities for
                    reduced indebtedness, home renovations, better distribution
                    of the household&apos;s investments or to buy something
                    you&apos;ve been longing for. In addition, with our model,
                    ownership remains unchanged and the owner pays no interest
                    or rent.
                  </font>
                </font>
              </p>
            </div>
          </section>
        </div>
        {/** Section 4 */}
        <div className="overflow-x-clip">
          <section className="grid grid-cols-12 gap-6 items-center mb-[224px] mt-24 p-0 mx-auto max-w-[1320px] w-full relative">
            <div
              className="row-start-1 relative max-w-[453px] mb-6 py-0 px-[22px] place-self-auto mt-0"
              style={{ gridColumn: "2 / span 5" }}
            >
              <h1 className="text-[15px] leading-6 text-[#757575]">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Expression of interest
                  </font>
                </font>
              </h1>
              <div className="mt-8">
                <p className="text-[42px] leading-[46px] font-thin">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Does it sound{" "}
                    </font>
                  </font>
                  <font
                    className="relative z-[1] after:absolute after:w-[105%] after:h-[30%] after:left-[50%] after:transform after:translate-x-[-50%] after:top-[60%] after:-z-[1] after:bg-[#EEFF32]"
                    style={{ verticalAlign: "inherit" }}
                  >
                    <font style={{ verticalAlign: "inherit" }}>
                      interesting?
                    </font>
                  </font>
                </p>
              </div>
              <p className="mt-12 text-[17px] font-light leading-7 text-[#222222]">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    Do you want to join the journey towards freer access to
                    housing capital and a democratized market for real estate
                    investments?
                  </font>
                </font>
              </p>
              <ActionButton
                title={"I am interested!"}
                customClass={
                  "mt-12 min-w-[182.5px] text-base px-6 py-3 bg-[#222222] border-black text-white hover:bg-[#EEFF32] hover:border-[#EEFF32] hover:text-[#222222]"
                }
              />
            </div>
            <div
              className="row-start-1 relative h-[500px]"
              style={{ gridColumn: "5 / span 8" }}
            >
              <img src="/cta.webp" alt="cta" className="w-[872px] h-[580px]" />
            </div>
            <div
              className="grid grid-cols-11 gap-6 items-center bg-[#222222] py-14 px-0 absolute bottom-[-200px]"
              style={{ gridColumn: "1 / span 11" }}
            >
              <h2
                className="text-white text-[32px] font-medium tracking-normal leading-10"
                style={{ gridColumn: "2 / span 2" }}
              >
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    How can we help you?
                  </font>
                </font>
              </h2>
              <p
                className="pl-[42px] text-[15px] leading-6 text-[#858585] self-center max-w-[506px]"
                style={{ gridColumn: "4 / span 5" }}
              >
                In our test, you answer questions about your housing situation
                and your interest in Reblocs to see if we can help you free up
                capital or invest in the single-family house market.
              </p>
              <ActionButton
                title={"Take the test here!"}
                customClass={
                  "min-w-[152px] text-base font-normal px-6 py-3 bg-[#EEFF32] border-black text-[#222222] hover:bg-[#222222] hover:border-[#EEFF32] hover:text-white"
                }
              />
            </div>
          </section>
        </div>
        {/** Section 5 */}
        <div className="overflow-hidden">
          <section className="mt-16 grid grid-cols-12 gap-6 items-center mx-auto mb-0 max-w-[1320px]">
            <div style={{ gridColumn: "2 / span 5" }}>
              <p className="text-[15px] leading-6 text-[#757575] font-light">
                Contact
              </p>
              <p className="mt-8 text-[#222222] text-[25px] leading-9 font-medium">
                Still something you wonder? Drop us a line and we&apos;ll get
                back to you as soon as possible.
              </p>
              <form className="mt-12 grid grid-cols-1 gap-3">
                <FormInput id={"name"} title={"Name"} />
                <FormInput id={"email"} title={"E-Mail"} />
                <TextArea
                  id={"message"}
                  title={"Message"}
                  style={{ gridColumn: "1 / 3" }}
                  inputStyle={{ minHeight: "96px" }}
                />
                <div
                  className="flex items-center justify-between"
                  style={{ gridColumn: "1 / 3" }}
                >
                  <div className="text-[13px] leading-6 text-[#757575] max-w[350px]">
                    <div className="flex flex-row items-start">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        style={{
                          clip: "rect(0px, 0px, 0px, 0px)",
                          clipPath: "inset(50%)",
                        }}
                        className="h-[1px] w-[1px] overflow-hidden absolute whitespace-nowrap ml-[37px]"
                      />
                    </div>
                    <div className=""></div>
                  </div>
                  <div className=""></div>
                </div>
              </form>
            </div>
            <div className=""></div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
