import React, { useState } from "react";
const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]
const XTable = () => {
  const [tableData, setTableData] = useState(initialData);
  const handleSortByDate = ()=>{
    const sortedData = [...tableData].sort((a,b)=>{
        if(a.date === b.date){
            return b.views - a.views;        
        }
        return b.date.localeCompare(a.date);
    });
    setTableData(sortedData)
  };

  const handleSortByViews = () =>{
    const sortedData = [...tableData].sort((a,b)=>{
        if(a.views === b.views){
            return b.date.localeCompare(a.date);
        }
        return b.views - a.views;        
    });
    setTableData(sortedData)
  }

  return (
    <>
      <h1>Date and Views Table</h1>

      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default XTable;
