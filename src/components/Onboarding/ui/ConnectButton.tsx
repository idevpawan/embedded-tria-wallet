import { IButton } from "./types";

function ConnectButton(props: IButton) {
  const { icon, title, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="border w-full items-center flex justify-center gap-1 py-[5.5px] px-6 border-[#FAFAFA29] rounded-xl"
    >
      {icon}
      <p className="text-[#FFFFFFCC]">{title ?? "Connect Wallet"}</p>
    </button>
  );
}

export default ConnectButton;
