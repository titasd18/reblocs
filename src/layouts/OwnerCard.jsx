/* eslint-disable react/prop-types */
import ActionButton from "../components/ActionButton";

const OwnerCard = ({ img, buttonTitle, text }) => {
  return (
    <div className="flex gap-6 justify-between">
      <img src={img} alt="" className="w-full h-12" />

      <div>
        <p className="text-lg font-light">{text}</p>
        <ActionButton
          title={buttonTitle}
          customClass={
            "mt-12 text-base px-6 py-3 bg-white border border-solid border-[#E5E5E5] text-[#222222] hover:bg-[#222222] hover:border-black hover:text-[#EEFF32] hover:bg-[#EEFF32] hover:border-[#EEFF32]"
          }
        />
      </div>
    </div>
  );
};

export default OwnerCard;
