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
      <div className="flex justify-between mt-10">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md" type="button">
          Edit
        </button>
        <button  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md" type="button">
          Delete
        </button>
      </div>
    </div>
  )
}

export default Patient