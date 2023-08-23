const Form = () =>{
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Pets follow up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add Pattient and {' '} <span className="text-indigo-600 font-bold">manage them</span>
      </p>
      <form className="bg-white shadow-md rounded py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Pet Name:</label>
          <input id="name" type="text" placeholder="name" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner Name:</label>
          <input id="owner" type="text" placeholder="owner" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email:</label>
          <input id="email" type="email" placeholder="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="discharged" className="block text-gray-700 uppercase font-bold">Discharged:</label>
          <input id="discharged" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms:</label>
          <textarea id="symptoms" placeholder="symptoms" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <input type="submit" value="Add Patient" className="bg-indigo-600 w-full cursor-pointer hover:bg-indigo-700 p-3 text-white uppercase font-bold" />
      </form>
      </div>
  )
}

export default Form;