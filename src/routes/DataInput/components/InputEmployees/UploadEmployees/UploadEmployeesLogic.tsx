import { useContext } from "react";
import _ from "lodash";
import { Store } from "../../../../../utils/Store";

function UploadEmployeesLogic(selectedFile: any) {
  const { state, dispatch } = useContext(Store);

  const handlePositionUpload = async (selectedFile: any) => {
    const csvArr = [];
    
    
    const text = await selectedFile.text();
    const textArr = text.split("\n");
    let positions = [];

    for (let index = 1; index < textArr.length; index++) {
      const element = textArr[index].split(",");
      const name = element[0]
        .replace(/\s+/g, "")
        .replace(/([A-Z])/g, " $1")
        .trim();
      const workDays = element[1];
      const positionsArr = _.compact(element.splice(2, 5));
      positions.push(...positionsArr);
      csvArr.push({ name, workDays, positionsArr });
    }
    const positionSetArr: any = Array.from(new Set(positions));

    dispatch({
      type: "ADD_ALL_EMPLOYEES",
      payload: csvArr,
    });

    dispatch({
      type: "ADD_ALL_POSITIONS",
      payload: positionSetArr
    })

    console.log("Employees Uploaded to Store");
  };
  return { handlePositionUpload };
}

export default UploadEmployeesLogic;
