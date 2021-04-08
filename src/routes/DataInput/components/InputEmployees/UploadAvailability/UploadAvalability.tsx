import React, { useState } from "react";
import { Store } from "../../../../../utils/Store";

export default function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const { state, dispatch } = React.useContext(Store);

  const changeHandler = (event: any) => {
    console.log("selectedFile", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    const csvObj: any = {};
    const text = await selectedFile.text();
    const textArr = text.split("\n");

    const calendarArr = textArr[0].split(",");

    for (let index = 1; index < calendarArr.length; index++) {
      const date = calendarArr[index].replace(/\s+/g, '');
      csvObj[date] = [];
      for (let Xindex = 1; Xindex < textArr.length; Xindex++) {
        const employeeArr = textArr[Xindex].split(",");
        const employeeName = employeeArr[0];
        const employeeDateAvailability = employeeArr[index]
        csvObj[date].push({ name: employeeName, availability: employeeDateAvailability });
      }
    }
    dispatch({
      type: "ADD_AVAILABILTY",
      payload: csvObj
    })
    console.log(csvObj);
  };

  return (
    <div>
      <h1>Upload Bulk Availability </h1>
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
      <button onClick={() => console.log(selectedFile)}>clg</button>
    </div>
  );
}
