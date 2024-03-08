import { IButton } from "./types";

function SocialButton(props: IButton) {
  const { isGoogle, title, icon } = props;
  return (
    <button
      className={`py-3 flex items-center px-[14px] w-full text-left max-h-[48px] h-full gap-3 rounded-2xl ${
        isGoogle
          ? "bg-gradient-to-r from-[#9F8BFF] to-[#7053FF]"
          : "bg-[#FAFAFA14] font-neuePro"
      }`}
    >
      {icon}
      <p className="text-base text-white font-semibold">{title}</p>
    </button>
  );
}

export default SocialButton;
