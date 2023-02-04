
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';
import { Navigate} from 'react-router-dom';
import { useState } from "react";

function handleError(message) {
  toast.error(message);
}

export async function fetchGet(url) {
  const navigate = Navigate()

  const [data, setData] = useState(null);
  
  const response = await fetch(url, { method: 'GET' });

  if (response.ok) {
    const data = await response.json();
    setData(data);
  } else {
    switch (response.status) {
      case 401:
        navigate("/home")
        break;
      default:
        handleError(" Ha ocurrido un error intentelo mas tarde");
    }
  }
}
