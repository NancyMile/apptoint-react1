import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setpatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  },[patients])

  const EliminarPatient = (id) => {
    console.log('eliminate patient', id);

    const deletetedPatient = patients.filter(deletedp => deletedp.id !== id)
    setPatients(deletetedPatient);
   }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setpatient}
        />
        <PatientsList
          setPatient={setpatient}
          patients={patients}
          EliminarPatient={EliminarPatient}
        />
      </div>
    </div>
  )
}

export default App
