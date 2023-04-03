import React from 'react'

function Address() {
    
      
      function fullAdress() {
        const building= "Résidence Noura"
      const city=" La Manouba"
      const street =" Rue des travailleurs"
        return `${building}, ${street}, ${city}`
      }
    
  return (
    <div>
       <h3>{fullAdress()} </h3> 
    </div>
  )
}

export default Address