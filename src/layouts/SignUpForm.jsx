import ActionButton from "../components/ActionButton";
import FormInput from "../components/FormInput";
import Select from "react-select";

const SignUpForm = () => {
  const userOptions = [
    {
      value: "I am a villa owner",
      label: "I am a villa owner",
    },
    {
      value: "I am an investor",
      label: "I am an investor",
    },
  ];
  return (
    <div className="h-[580px] col-start-6 col-end-13 row-start-1 flex relative">
      <img src="/hero1.webp" alt="hero image 1" className="w-[324px] h-full" />
      <div className="h-full py-12 px-16 bg-white">
        <div className="max-w-[280px]">
          <h2 className="leading-10 text-[#222222] text-4xl font-medium">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Does it sound interesting?
              </font>
            </font>
          </h2>
          <p className="mt-6 text-base text-[#757575]">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Sign up for the waiting list to stay updated before the launch
                and be among the first to use our service.
              </font>
            </font>
          </p>
          <form className="mt-6 w-full">
            <FormInput id={"name"} title={"Name"} />
            <FormInput
              id={"email"}
              title={"E-Mail"}
              style={{ marginTop: "28px", marginBottom: "28px" }}
            />
            <Select
              className={"basic-single"}
              classNames={{
                control: () =>
                  "w-full px-5 pt-[10px] pb-[10px] border border-solid border-[#E5E5E5] rounded text-base text-[#222222] transition-all duration-200 placeholder:text-[#222222]!important",
              }}
              classNamePrefix="select"
              defaultValue={"Who are you?"}
              placeholder="Who are you?"
              menuPlacement="bottom"
              name="color"
              options={userOptions}
            />
            <ActionButton
              title={"I am interested!"}
              customClass={
                "w-full text-base mt-7 p-[18px] bg-[#222222] border-black text-white hover:bg-[#EEFF32] hover:border-[#EEFF32] hover:text-[#222222]"
              }
            />
          </form>
        </div>
      </div>
      <div className="-z-[1] absolute bg-[#EEFF32] w-screen h-[110%] top-[-10%] left-[-24%]"></div>
    </div>
  );
};

export default SignUpForm;
