import { useState, useRef } from "react";
import classes from "./WorksiteForm.module.css";

const WorksiteForm = (props) => {
  const worksitesArr = [];
  console.log("'couc");
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    date: true,
    location: true,
    commentary: true,
  });

  class WorkSite {
    constructor(name, date, location, commentary) {
      this.name = name;
      this.date = date;
      this.location = location;
      this.commentary = commentary;
    }
  }

  const InputNameRef = useRef();
  const InputDateRef = useRef();
  const InputLocationRef = useRef();
  const InputCommentaryRef = useRef();
  const closeHandler = (event) => {
    props.onClick();
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    let InputName = InputNameRef.current.value;
    let InputDate = InputDateRef.current.value;
    let InputLocation = InputLocationRef.current.value;
    let InputCommentary = InputCommentaryRef.current.value;

    const newWorkSite = new WorkSite(
      InputName,
      InputDate,
      InputLocation,
      InputCommentary
    );
    worksitesArr.push(newWorkSite);

    fetch(
      `https://carpenter-b30a8-default-rtdb.europe-west1.firebasedatabase.app/chantiers.json`,
      {
        method: "POST",
        body: JSON.stringify({
          Infochantier: newWorkSite,
        }),
      }
    );

    InputNameRef.current.value = "";
    InputDateRef.current.value = "";
    InputLocationRef.current.value = "";
    InputCommentaryRef.current.value = "";
    props.onClick();
  };
  return (
    <>
      <form className={classes.form} onSubmit={formSubmissionHandler}>
        <div className={classes.close} onClick={closeHandler}>
          X
        </div>
        <div>
          <div className={classes.control}>
            <label htmlFor="name">Nom du client</label>
            <input ref={InputNameRef} type="text" id="name" />
          </div>
          <div className={classes.control}>
            <label htmlFor="Date">Date début du chantier</label>
            <input ref={InputDateRef} type="date" id="Date" />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="Location">Lieux</label>
          <input ref={InputLocationRef} type="text" id="Location" />
        </div>
        <div className={classes.control}>
          <label htmlFor="Commentaire">Commentaire</label>
          <input ref={InputCommentaryRef} type="text" id="Commentaire" />
        </div>
        <div className={classes.actions}>
          <button className={classes.submit}>Valider</button>
        </div>
      </form>
    </>
  );
};

export default WorksiteForm;
