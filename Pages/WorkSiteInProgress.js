// import Classes from "./WorkSiteInProgress.module.css";
import WorkSite from "../Components/WorkSite";
import WorksiteForm from "../Components/WorksiteForm";
import NewWorkSiteBtn from "../Components/newWorkSiteBtn";
import { useState, useEffect} from "react";

function WorkSiteInProgress(props) {
  const [NewWorkSiteBtnisClicked, setIsClicked] = useState(false);

  return (
    <>
      <header className="App-header">
        <WorkSite changeState={NewWorkSiteBtnisClicked}/>
        {NewWorkSiteBtnisClicked && (
          <WorksiteForm
            onClick={() => {
              setIsClicked(!NewWorkSiteBtnisClicked);
            }}
          />
        )}
        {!NewWorkSiteBtnisClicked && (
          <NewWorkSiteBtn
            onClick={() => {
              setIsClicked(!NewWorkSiteBtnisClicked);
            }}
          />
        )}
      </header>
    </>
  );
}



export default WorkSiteInProgress;
