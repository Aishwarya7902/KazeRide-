import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {
    
    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description)
        } else if (activeField === 'destination') {
            setDestination(suggestion.description)
        }
        //  setVehiclePanel(true)
        //  setPanelOpen(false)
    }

    return (
        <div className="max-h-60 overflow-y-auto border rounded-lg p-2 bg-white shadow-md">
          {suggestions.length > 0 ? (
            suggestions.map((elem, idx) => (
              <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 cursor-pointer'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                  <i className="ri-map-pin-fill"></i>
                </h2>
                <h4 className='font-medium'>{elem.description}</h4>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No suggestions available</p>
          )}
        </div>
      );
      
}

export default LocationSearchPanel