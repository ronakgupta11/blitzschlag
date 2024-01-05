export default function Input({ label, value }) {
  return (
    <div className="grid gap-[16px]">
      <label htmlFor="Name" className="text-[#353535] text-base font-medium">
        {label}
      </label>
      <input
        type="text"
        name={label}
        value={value}
        className="rounded-xl border-[1px] border-[#AAAAAA] rounded text-[#353535]"
      />
    </div>
  );
}
