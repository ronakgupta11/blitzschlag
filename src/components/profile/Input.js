export default function Input({ label, value ,onChange}) {
  return (
    <div className="grid gap-[16px]">
      <label htmlFor="Name" className="text-[#353535] text-base font-medium">
        {label}
      </label>
      <input
        type="text"
        name={label}
        value={value}
        onChange={onChange}
        className="rounded-xl border-[1px] border-[#AAAAAA]  text-[#353535]"
      />
    </div>
  );
}
