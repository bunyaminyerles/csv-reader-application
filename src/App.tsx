import React from 'react';
import {Card, Tabs} from "antd";
import CsvImportPage from "./CsvImportPage";
import ResultTablePage from "./ResultTablePage";

function App() {

  const items = [
    {
      label: 'CSV Import',
      key: '1',
      children: <CsvImportPage></CsvImportPage>,
    },
    {
      label: 'Result Table',
      key: '2',
      children: <ResultTablePage></ResultTablePage>,
    }
  ]

  return (
    <Card style={{height:'inherit'}}>
      <Tabs items={items}></Tabs>
    </Card>
  );
}

export default App;
