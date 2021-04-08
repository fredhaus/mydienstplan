import React, { useState, useContext } from "react";
import { Store } from "../../utils/Store"

function CheckResultsLogic() {
  const {state, dispatch} = useContext(Store)
  console.log(state)

  return <div></div>;
}

export default CheckResultsLogic;
