import classes from "./newWorkSiteBtn.module.css";

function NewWorkSiteBtn(props) {
  return (
    <>
      <button className={classes.container} onClick={props.onClick}>Nouveau chantier</button>
    </>
  );
}

export default NewWorkSiteBtn;
