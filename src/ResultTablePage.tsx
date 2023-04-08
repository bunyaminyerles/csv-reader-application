import {Button, Table} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";

function ResultTablePage() {

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState<{ title: string, dataIndex: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    // api call to get data
    axios.get('https://api.publicapis.org/entries').then((response) => {
      if (Object.keys(response.data.entries[0]).length > 0) {
        setData(response.data.entries)
        var headers = Object.keys(response.data.entries[0]);
        const tmpColumns = headers.map((col) => ({
          title: col,
          dataIndex: col
        }));
        setColumns(tmpColumns);
      }
    }).catch((error: any) => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <Button onClick={() => getData()}> Re Fetch Data</Button>
      <Table loading={loading} dataSource={data} columns={columns}/>
    </div>
  )
}

export default ResultTablePage;
