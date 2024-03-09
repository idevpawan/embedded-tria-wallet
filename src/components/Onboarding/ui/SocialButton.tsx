import { IButton } from "./types";

function SocialButton(props: IButton) {
  const { isGoogle, title, icon } = props;
  return (
    <button
      className={`py-3 flex items-center transition-all ease-in-out px-[14px] w-full text-left max-h-[48px] h-full gap-3 rounded-2xl ${
        isGoogle
          ? "gauth-hover"
          : "bg-[#FAFAFA14] font-neuePro socialbtn-hover"
      }`}
    >
      {icon}
      <p className="text-base text-white font-semibold">{title}</p>
    </button>
  );
}

export default SocialButton;
