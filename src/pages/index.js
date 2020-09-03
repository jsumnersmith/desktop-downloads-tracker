import React, {useState, useEffect} from "react";
import Version from '../components/Version';

export default function Home() {
  const [downloadData, setDownloadData] = useState([])
  useEffect(() => {
    fetch(`https://desktop-download-tracker-server.jsumnersmith.vercel.app/`)
      .then(response => response.json()) 
      .then(resultData => {
        setDownloadData(resultData)
      })
  }, [])

  return (
    <div>
      { downloadData.map(data => <Version data={data} />) }
    </div>
  )
}
