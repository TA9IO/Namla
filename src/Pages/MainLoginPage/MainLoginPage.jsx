import React from "react";
import "./mainLoginPage.css";
import { Link } from "react-router-dom";
import { Button } from "../../Components";
function MainLoginPage() {
  return (
    <div className='MainLoginPage'>
      {/* /* A link to the HOME page.  */}
      <Button takeMeTo={"/Home/Clusters"}>Log In</Button>
    </div>
  );
}

export default MainLoginPage;
