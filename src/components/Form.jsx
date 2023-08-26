import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({ patients, setPatients, patient }) => {

  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [discharged, setDischarged] = useState('');
  const [symtoms, setSymtoms] = useState('');

  const [error, setError] = useState(false);


  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      //has data
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDischarged(patient.discharged);
      setSymtoms(patient.symtoms);
    }
  },[patient])

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('send from');

    //validate form
    if ([name, owner, email, discharged, symtoms].includes('')) {
      console.log('Some data is missing')
      setError(true)
      return;
    }
    setError(false);

    const objectPatient = {
      name,
      owner,
      email,
      discharged,
      symtoms,
      id: generateId()
    }

    //console.log(objectPatient);

    setPatients([...patients, objectPatient]);

    //reset form
    setName('');
    setOwner('')                                                                                                                                                                                                                                                                                                            ;
    setEmail('');
    setDischarged('');
    setSymtoms('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Pets follow up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Pattient and {' '} <span className="text-indigo-600 font-bold">manage them</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded py-10 px-5 mb-10">
        {error && (
          <Error message="Please fill all the form" />
        )}
        
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Pet Name:</label>
          <input id="name" type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value)}} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner Name:</label>
          <input id="owner" type="text" value={owner} onChange={(e) => { setOwner(e.target.value)}} placeholder="owner" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email:</label>
          <input id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value)}} placeholder="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="discharged" className="block text-gray-700 uppercase font-bold">Discharged:</label>
          <input id="discharged" type="date" value={discharged} onChange={(e) => { setDischarged(e.target.value) }} className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms:</label>
          <textarea id="symptoms" value={symtoms} onChange={(e) => { setSymtoms(e.target.value)}} placeholder="symptoms" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <input type="submit" value="Add Patient" className="bg-indigo-600 w-full cursor-pointer hover:bg-indigo-700 p-3 text-white uppercase font-bold" />
      </form>
      </div>
  )
}

export default Form;