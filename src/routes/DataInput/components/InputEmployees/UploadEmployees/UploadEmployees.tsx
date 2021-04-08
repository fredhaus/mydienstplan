import React, { useState } from "react";
import UploadEmployeesLogic from "./UploadEmployeesLogic";

export default function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState<any>();
  const { handlePositionUpload } = UploadEmployeesLogic(selectedFile);

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <h4>Upload Bulk Employees </h4>
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={() => handlePositionUpload(selectedFile)}>
          Submit
        </button>
      </div>
    </div>
  );
}
