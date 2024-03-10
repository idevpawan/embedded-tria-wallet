function Tooltip() {
  return (
    <div className="absolute -top-2.5 -left-7 w-[62px] h-[24px] py-1 px-3 rounded-lg z-10 bg-[#E5E5E5] -rotate-45">
      <p className="font-semibold text-[#101010] text-xs">Shrink</p>
      <div className="bg-[#e5e5e5] w-[18px] h-[18px] rounded rotate-45 absolute -z-10 -bottom-1.5 left-1/2 transform -translate-x-1/2" />
    </div>
  );
}

export default Tooltip;
