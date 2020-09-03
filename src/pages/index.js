import React, {useState, useEffect} from "react";
import Version from '../components/Version';

export default function Home() {
  const [downloadData, setDownloadData] = useState([])
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://desktop-download-tracker-server.jsumnersmith.vercel.app/`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        console.log(resultData);
        setDownloadData(resultData)
      }) // set data for the number of stars
  }, [])

  return (
    <div>
      { downloadData.map(data => <Version data={data} />) }
    </div>
  )
}
