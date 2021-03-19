import React, { useState } from "react";
import csv from "csv-parser";
import fs from "fs";

export default function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const results: any = [];

  const changeHandler = (event: any) => {
    console.log("selectedFile", event.target.files[0]);
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    const csvArr: any = [];
    const text = await selectedFile.text();
    const textArr = text.split("\n");
    console.log("textArr", textArr);
    const csvObjKeys = textArr[0].split(",");
    const NameKey = csvObjKeys[0];
    const AgeKey = csvObjKeys[1];

    for (let index = 1; index < textArr.length; index++) {
      const name = textArr[index].split(",")[0];
      const age = textArr[index].split(",")[1];
      csvArr.push({ name, age });
    }
    console.log(csvArr);
	};
	
	// Next Steps: 
	// - Object mit Tag als Key
	// - Pro Tag alle ein Mitarbeiter-Key und Availability String
	// - Dann bei der Zuweisungslogic alle Available Mitarbeiter an dem Tag für die gewüschte Position suchen, randomizen




  const handleSubmission2 = async () => {
    const csvArr: any = [];
    const text = await selectedFile.text();
    const textArr = text.split("\n");
		// console.log("textArr", textArr);
		
		const employeeArr1 = textArr[0].split(",")
		const employeeName1 = employeeArr1[0]
		console.log("employeeName1", employeeName1)
		console.log("employeeArr1", employeeArr1)

    const csvObjKeys = textArr[0].split(",");
    const NameKey = csvObjKeys[0];
    const AgeKey = csvObjKeys[1];

    for (let index = 1; index < textArr.length; index++) {
      const name = textArr[index].split(",")[0];
      const age = textArr[index].split(",")[1];
      csvArr.push({ name, age });
    }
    // console.log(csvArr);
  };

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={handleSubmission2}>Submit</button>
      </div>
      <button onClick={() => console.log(selectedFile)}>clg</button>
    </div>
  );
}
