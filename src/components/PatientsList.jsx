import Patient from "./Patient"
const PatientsList = ({ setPatient, patients, EliminarPatient }) => {

  //console.log(patients && patients.length);
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {patients && patients.length ? (
      <>
        <h2 className="text-center font-black text-3xl">Patients List</h2>
        <p className="text-xl text-center mt-5 mb-10">Manage{' '}<span className="text-indigo-600 font-bold">Patiensts</span></p>

        {patients.map((patient) => (
          <Patient
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
            EliminarPatient={EliminarPatient}
          />
        ))}
      </>
      ):(
        <>
          <h2 className="text-center font-black text-3xl">No Patients </h2>
          <p className="text-xl text-center mt-5 mb-10">Manage{' '}<span className="text-indigo-600 font-bold">Add Patiensts</span></p>
        </>
      )}
    </div>
  )
}

export default PatientsList