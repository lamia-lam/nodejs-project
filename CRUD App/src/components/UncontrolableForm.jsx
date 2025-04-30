import { useRef } from "react";

function UncontrolableForm() {
  const nameref = useRef(null);
  const emailref = useRef(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    console.log("name :", name);
    console.log("email :", email);
  };

  return (
    <>
      <h1>Uncontrolable Form</h1>

      <form onSubmit={handlesubmit}>
        <label>
          Name:
          <input type="text" ref={nameref} />
        </label>
        <label>
          Name:
          <input type="email" ref={emailref} />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default UncontrolableForm;
