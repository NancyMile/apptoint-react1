import Patient from "./Patient"
const PatientsList = ({ patients }) => {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      <h2 className="text-center font-black text-3xl">Patients List</h2>
      <p className="text-xl text-center mt-5 mb-10">Manage{' '}<span className="text-indigo-600 font-bold">Patiensts</span></p>
      
      {patients.map((patient) => (
        <Patient
          key={patient.id}
          patient={patient}
        />
       ))}
      
    </div>
  )
}

export default PatientsList