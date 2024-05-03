import { useState } from "react";
import FormInput from "../components/FormInput";
import TextArea from "../components/TextArea";
import ActionButton from "../components/ActionButton";

const ContactSection = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="overflow-hidden">
      <section className="mt-16 grid grid-cols-12 gap-6 items-center mx-auto mb-0 max-w-[1320px]">
        <div style={{ gridColumn: "2 / span 5" }}>
          <p className="text-[15px] leading-6 text-[#757575] font-light">
            Contact
          </p>
          <p className="mt-8 text-[#222222] text-[25px] leading-9 font-medium">
            Still something you wonder? Drop us a line and we&apos;ll get back
            to you as soon as possible.
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
              <div className="text-[13px] leading-6 text-[#757575] max-w-[350px]">
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
                  <span
                    className="checkbox inline-block relative h-[20px] w-[20px] min-w-[20px] border border-solid border-[#e5e5e5] rounded bg-white transition-all duration-300"
                    aria-hidden="true"
                    onClick={() => setChecked((prev) => !prev)}
                  >
                    <span
                      className={`inline-block absolute h-2 w-2 left-[5px] top-[5px] rounded-sm bg-white ${
                        checked && `bg-[#222222]`
                      }`}
                    ></span>
                  </span>
                  <label htmlFor="privacy" className="ml-4">
                    <p className="text-[13px] leading-6 text-[#757575] font-light align-[inherit]">
                      I agree to the handling of personal data - see details in
                      our{" "}
                      <a href="/" target="_blank" className="underline">
                        privacy policy.
                      </a>
                    </p>
                  </label>
                </div>
                <div className=""></div>
              </div>
              <ActionButton
                title={"Send"}
                customClass={
                  "min-w-[50px] text-base px-6 py-3 bg-[#222222] border-black text-white hover:bg-[#EEFF32] hover:border-[#EEFF32] hover:text-[#222222]"
                }
              />
            </div>
          </form>
          <div className="flex items-center mt-12">
            <p className="text-[15px] leading-6 text-[#757575] mr-6 font-light">
              Or contact us by email:
            </p>
            <div className="flex items-center">
              <div className="w-[33px] h-[32px] rounded-full flex justify-center bg-[#EEFF32] mr-3">
                <img src="/mail.svg" alt="mail" className="w-[18px] h-8" />
              </div>
              <a
                href="mailto:hello@reblocs.co"
                className="text-[17px] text-[#222222] font-medium tracking-normal leading-6 relative hover:scale-125 hover:duration-300"
              >
                hello@reblocs.co
              </a>
            </div>
          </div>
        </div>
        <div className="" style={{ gridColumn: "8 / span 5" }}>
          <div className="relative">
            <img
              src="/contact.webp"
              alt="contact"
              className="w-[516px] h-[490px] "
            />
            <div className="-z-[1] absolute bg-[#EEFF32] w-screen h-[80%] top-[25%] left-[40%] "></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
