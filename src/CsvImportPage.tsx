import axios from "axios";
import {useState} from "react";

function CsvImportPage() {

  const [loading, setLoading] = useState(false);

  const onChange = (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    // api call to upload csv file
    axios.post('http://localhost:9000/csv/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {loading ?
        <div>Loading...</div>
        :
        <input type="file" accept={'csv'} onChange={(e: any) => onChange(e)}/>
      }
    </div>
  )
}

export default CsvImportPage;
