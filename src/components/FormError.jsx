import "./FormError.css";

function FormError(props) {
  if (!props.visible) return null;

  return <div className="form-error">Failed to sign in!</div>;
}

export default FormError;