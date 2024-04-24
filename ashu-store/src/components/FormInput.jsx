const FormInput = ({ label, name, type, value, size, onChange }) => {
  return (
    <>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder={value}
          className={`input input-bordered w-full max-w-xs ${size}`}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default FormInput;
