import { IInput } from "./types";

function Input(props: IInput) {
  const { input, setInput } = props;
  return (
    <div className="bg-gradient-to-t w-[248px] from-[#7F43FF99] to-[#36363699] p-[1.5px] rounded-[12px]">
      <div className="flex items-center gap-4 justify-between bg-[#232323] rounded-[12px] p-3">
        <input
          className="w-full caret-[#7F43FF] caret outline-none font-semibold font-neuePro text-white bg-transparent"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <span className="font-semibold font-neuePro text-base text-text-light-tertiary">
          @tria
        </span>
      </div>
    </div>
  );
}

export default Input;
