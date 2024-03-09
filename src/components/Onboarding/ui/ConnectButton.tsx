import { IButton } from "./types";

function ConnectButton(props: IButton) {
  const { icon, title, onClick, isLoading } = props;
  return (
    <button
      onClick={onClick}
      className="border w-full items-center flex justify-center gap-1 py-[5.5px] px-6 border-[#FAFAFA29] transition-all ease-in-out connectbtn-hover rounded-xl"
    >
      {!isLoading && icon}
      {!isLoading && <p className="text-[#FFFFFFCC]">{title ?? "Connect Wallet"}</p>}
      {isLoading && <div className="loader" />}
    </button>
  );
}

export default ConnectButton;
