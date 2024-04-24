const FormCheckbox = ({ label, name, checked, size, onChange }) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={checked}
        onChange={onChange}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
