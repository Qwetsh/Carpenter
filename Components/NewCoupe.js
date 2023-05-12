import classes from "./NewCoupe.module.css";

const NewCoupe = function (props) {
  const formSubmissionHandlerForLog = (event) => {
    event.preventDefault();
    //send data to firebase
    const longueur = document.getElementById("longueur").value; //get the value of the input
    const circonference = document.getElementById("circonference").value; //get the value of the input
    const indiceTarif = document.getElementById("indiceTarif").value; //get the value of the input
    const coupe = { longueur, circonference, indiceTarif }; //create an object with the values  of the inputs
    console.log(coupe);
    // send the object to firebase inside an existing object
    fetch(
      //send the object to firebase inside an existing object
      `https://carpenter-b30a8-default-rtdb.europe-west1.firebasedatabase.app/chantiers/${props.id}/coupe.json`,
      //url of the database + the name of the object where we want to send the data + .json to make it work with firebase (it's a convention)
      {
        //the second argument is an object with the method and the body of the request (the data we want to send)
        method: "POST", //method of the request (POST to send data)
        body: JSON.stringify({
          //body of the request (the data we want to send)
          coupe: coupe, //the data we want to send
        }),
      }
    );
    //reset the inputs
    document.getElementById("longueur").value = "";
    document.getElementById("circonference").value = "";
    document.getElementById("indiceTarif").value = "";
    //close the form
    props.onClick();
    //reload the page
    window.location.reload();
    
  };

  return (
    <>
      <form>
        <div className={classes.close} onClick={props.onClick}>
          X
        </div>
        <div className={classes.newCoupeContainer}>
          <div className={classes.formcalc}>
            <label htmlFor="longueur">Longueur de la coupe</label>
            <input id="longueur" type="number" />
          </div>
          <div className={classes.formcalc}>
            <label htmlFor="circonference">Circonférence de la coupe</label>
            <input id="circonference" type="number" />
          </div>
          <div className={classes.formcalc}>
            <label htmlFor="indiceTarif">Indice tarifaire : </label>
            <input className={classes.indice} id="indiceTarif" type="number" />
          </div>
          <div></div>

          <button
            className={classes.newCoupeValidate}
            onClick={formSubmissionHandlerForLog}
          >
            Valider
          </button>
          
        </div>
      </form>
    </>
  );
};

export default NewCoupe;
