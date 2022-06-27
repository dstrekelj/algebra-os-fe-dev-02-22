import "./FormMessage.css";

function FormMessage(props) {
  if (!props.visible) return null;

  return <div className="form-message">Successfully signed in!</div>;
}

export default FormMessage;