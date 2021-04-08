import { useState, useContext } from "react";

// import { Store } from "../../../../utils/Store";
import { Store } from "../../utils/Store";

function InputPositionLogic() {
  const { state, dispatch } = useContext(Store);

  const changeTab = (tab: string) => {
    return dispatch({
      type: "CHANGE_DATAINPUT_TAB",
      payload: tab
    })
  }


  return { changeTab };
}

export default InputPositionLogic;
