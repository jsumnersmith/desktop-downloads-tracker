import React from 'react';

const Version = ({data}) => (
  <div>
    <h2>{data.title}</h2>
    <table>
      <tbody>
        {data.downloads.map(item =>{
          return <tr><td><strong>{item.title}</strong></td><td>{item.downloads}</td></tr>
        })}
      </tbody>
    </table>
  </div>
);

export default Version;