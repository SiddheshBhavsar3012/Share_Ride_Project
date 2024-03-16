import React from 'react'
import { useState, useEffect } from "react";
export default function AllVehicles() {
  const [vehicledata, allvehiclesupdate] = useState();
  useEffect(() => {
    fetch("")
      .then((res) => { return res.json(); })
      .then((resp) => { allvehiclesupdate(resp); })
      .catch((err) => { console.log(err.message); })
  }, [])
  return (
    <>
      <div>All Vehicles</div>
    </>
  )
}
