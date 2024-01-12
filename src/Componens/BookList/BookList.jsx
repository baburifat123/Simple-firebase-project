import { useContext, useState } from "react";
import { FaFileImage } from "react-icons/fa6";
import { AuthContext} from "../Firebase/Context";
const BookList = () => {

    const firebasedata = useContext(AuthContext);
    const {collaction} = firebasedata;
    const [name, setBookName]= useState('');
    const [number, setid] = useState('');
    const [price, setprice] = useState([]);
    const [cover, setimg] = useState(null);

    const handale =(e)=>{
        e.preventDefault()
        collaction(name,number, price, cover)
       
       };
    return (
        <div className="bal">
            <div className="space-y-6 bg-slate-300 p-11 rounded-md ">
                <h1 className="text-xl font-medium">Book name</h1>
        <input
         onChange={(e)=>setBookName(e.target.value)}
          value={name} 
          type="name" 
          placeholder="Enter Book Name" 
          className="outline-none w-full border p-2 rounded-md border-blue-400" />
          
          <label className="text-xl mt-5 font-medium " htmlFor=""> Book Number</label>
          <input  
          onChange={(e)=>setid(e.target.value)} 
          value={number} type="number"
          placeholder="Enter Book Number" 
          className="outline-none w-full border p-2 rounded-md border-blue-400" />
            <br />
          <h1 className="text-xl font-medium">Book Price</h1>
          <input
         onChange={(e)=>setprice(e.target.value)}
          value={price} 
          type="name" 
          placeholder="Enter Book Name" 
          className="outline-none w-full border p-2 rounded-md border-blue-400" />
         <br />
         <input
         type="file"
         style={{display: "none"}}
         onChange={(e) => setimg(e.target.files[0])}
         id="d"
        />
        <label htmlFor="d"> <FaFileImage className="text-3xl text-blue-500 mt-5"></FaFileImage> </label>
       <div className="flex justify-center">
       <button 
           className="w-[160px] text-lg font-bold  text-white bg-blue-600 rounded-md p-2 hover:bg-blue-800" 
           onClick={handale}>Create
       </button>
       </div>
       
  </div>
        </div>
    );
};

export default BookList;