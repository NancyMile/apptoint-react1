const Patient = ({ patient }) => {
  const {name, owner, email, discharged, symtoms } = patient;
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Name: {' '}
        <span className="font-normal normal-case">{name}</span>
    </p>
    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Owner Name: {' '}
        <span className="font-normal normal-case">{owner}</span>
    </p>
    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Email: {' '}
        <span className="font-normal normal-case">{email}</span>
    </p>
    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Discharged: {' '}
      <span className="font-normal normal-case">{discharged}</span>
    </p>
    <p className=" font-bold mb-3 text-gray-700 uppercase">
      Symtoms: {' '}
        <span className="font-normal normal-case">{symtoms}</span>
    </p>
  </div>
  )
}

export default Patient