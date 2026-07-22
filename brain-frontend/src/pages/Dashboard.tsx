import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


import Button from "../component/Button";
import Card from "./Card";

import AddContentModal from "./AddContentModal";

type Content = {
  _id: string;
  title: string;
  type: string;
  link: string;
};

export default function Dashboard() 
{const [open, setOpen] = useState(false); 
  const navigate=useNavigate();
function handlelogout(){
  localStorage.removeItem("token");
  navigate("/signup")
}

  const [contents, setContents] = useState<Content[]>([]);

  async function fetchContent() {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:4000/api/v1/content",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContents(response.data.content);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch content");
    }
  }
// eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Brainly Dashboard</h1>
        <button onClick={()=>{
          localStorage.removeItem("token");
          window.location.href="/signup"; }}
          >logout</button>

        <Button
          text="Add Content"
          onClick={() => setOpen(true)}/>
          <Button
          text="logout"onClick={handlelogout}/>
          { open &&(
                <AddContentModal open={open} onClose={()=>setOpen(false)}
                onSuccess={fetchContent}
            
          
        />)}
      </div>

      {contents.length === 0 ? (
        <p className="text-gray-500">No content found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents.map((item) => (
            <Card
              key={item._id}
              title={item.title}
              type={item.type}
              link={item.link}
            />
          ))}
        </div>
      )}
    </div>
  );
}