import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import dataTeachers from "../../data/teachers";

const AddPage = () => {
  //   const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [subject, setsubject] = useState("");
  const [phone, setphone] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [salary, setsalary] = useState("");
  //   const changeField = (value, stateName, setFunc) => {
  //     setFunc(value);
  //     console.log(checkRequired(value));
  //     setErrors({ ...errors, [stateName]: checkRequired(value) });
  //   };

  const submit = (e) => {
    e.preventDefault();
    const newObject = {
      id: dataTeachers.length + 1,
      firstName: name,
      lastName: lastName,
      subject: subject,
      phone: phone,
      birthDate: birthDate,
      salary: salary,
    }
    dataTeachers.push(newObject);
    alert("added")
    // setIsSubmit(true);
    console.log(name.toUpperCase());
  };

  //   const checkRequired = (text, min = 1) => {
  //     text = text.trim();
  //     const res = isSubmit && text.length < min;
  //     return res;
  //   };
  //   console.log(errors);

  return (
    <form onSubmit={submit}>
      <div className="row mb-4">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Ism"
              variant="outlined"
              className="w-100"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              //   error={errors.name}
              label="Familiya"
              variant="outlined"
              className="w-100"
              value={lastName}
              //   onChange={(e) => changeField(e.target.value, "name", setName)}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Fani"
              variant="outlined"
              className="w-100"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Telefon raqam"
              variant="outlined"
              className="w-100"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Tug'ilgan kun"
              variant="outlined"
              className="w-100"
              value={birthDate}
              onChange={(e) => setbirthDate(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Maoshi"
              variant="outlined"
              className="w-100"
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button variant="outlined" type="submit">
        <FontAwesomeIcon icon={faPlus} className="me-2" /> Qo'shish
      </Button>
    </form>
  );
};

export default AddPage;
