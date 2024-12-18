import React from 'react'

const LocationSearchPanel = (props) => {

    // sample array location
    const locations = [
        "24B, Near Kapoor's cafe, DAV Public School,Patna",
        "28B, Near Malhotra's cafe, DPS Public School,Delhi",
        "2B, Near Singhania's cafe, Mount Litera School,Shimla",
        "2AB, Near Agarwal's cafe, St. Xavier,Goa"
    ]

    return (

        <div>
            {locations.map(function (elem,idx) {
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4 items-center justify-center my-2 border-2 p-3 rounded-xl border-gray-50 active:border-black'>
                    <h2 className='bg-[#eee] h-8 w-12  rounded-full flex items-center justify-center'><i className="ri-map-pin-fill "></i></h2>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            })}



            

        </div>
    )
}

export default LocationSearchPanel