import axios from 'axios'
import { API_KEY } from '../Constant/Constant'
import { baseUrl } from '../Constant/Constant'

 export const fetchDataApi=async(param)=>{
  var data;
    try{
    
      data = await axios.get(`${baseUrl}${param}?api_key=${API_KEY}`)
      .then((res)=>{            
        console.log("response",res.data.results);
      return res
      })
    }catch(error){
      console.log("error",error);
      return error
    }
    return data;
    }


