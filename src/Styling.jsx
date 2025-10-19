import React, { useState } from 'react'

export default function Styling() {
    const [cardstyle, setCardStyle]=useState(
    {

            border: '1px solid blac',
            width:'200px', 
            height:'300px',
            borderRadius: '2rem',
            boxShadow: '10px 10px 10px grey'
    })
    const [textColor, settextColor]=useState("black")
  const Updatetheme =(bgColor, textcolor)=>{
    setCardStyle({...cardstyle, backgroundColor:bgColor})
    settextColor(textcolor)

  }
  const [grid, setgrid]=useState(true)
  return (
    <>
    <button onClick={()=>{Updatetheme('grey', 'red')}} >Set  theme Style</button>
    <button onClick={()=>{Updatetheme('white', 'black')}} >Set default Style</button>
    <button onClick={()=>{setgrid(!grid)}}>toggle</button>
    <div style={{border: '1px solid blac',
            display: grid? 'flex': 'block',
            flexWrap: 'wrap',
            gap: '2rem',
            marginLeft: '2rem'}}>

    <div style={cardstyle} >
        <img style={{height:'200px', width:'200px', objectFit:'cover'}} src="https://images.pexels.com/photos/34288529/pexels-photo-34288529.jpeg" alt="" />
        <div style={{textAlign:'center', color:textColor }}> 
            <h3 >talha</h3>
            <h4> Haleema</h4>
        </div>
    </div>
   <div style={cardstyle} >
        <img style={{height:'200px', width:'200px', objectFit:'cover'}} src="https://images.pexels.com/photos/34288529/pexels-photo-34288529.jpeg" alt="" />
        <div style={{textAlign:'center', color:textColor }}> 
          <h3 >talha</h3>
            <h4> Haleema</h4>
        </div>
    </div>
   <div style={cardstyle} >
        <img style={{height:'200px', width:'200px', objectFit:'cover'}} src="https://images.pexels.com/photos/34288529/pexels-photo-34288529.jpeg" alt="" />
         <div style={{textAlign:'center', color:textColor }}> 
         <h3 >talha</h3>
            <h4> Haleema</h4>
        </div>
    </div>
    <div style={cardstyle} >
        <img style={{height:'200px', width:'200px', objectFit:'cover'}} src="https://images.pexels.com/photos/34288529/pexels-photo-34288529.jpeg" alt="" />
         <div style={{textAlign:'center', color:textColor }}> 
       <h3 >talha</h3>
            <h4> Haleema</h4>
        </div>
    </div>
        <div style={cardstyle} >

        <img style={{height:'200px', width:'200px', objectFit:'cover'}} src="https://images.pexels.com/photos/34288529/pexels-photo-34288529.jpeg" alt="" />
        <div style={{textAlign:'center', color:textColor }}> 
           <h3 >talha</h3>
            <h4> Haleema</h4>
        </div>
    </div>
    <div style={cardstyle} >

        <img style={{height:'200px', width:'200px', objectFit:'cover'}} src="https://images.pexels.com/photos/34288529/pexels-photo-34288529.jpeg" alt="" />
       <div style={{textAlign:'center', color:textColor }}> 
        <h3 >talha</h3>
            <h4> Haleema</h4>
        </div>
    </div>
         <div style={cardstyle} >

        <img style={{height:'200px', width:'200px', objectFit:'cover'}} src="https://images.pexels.com/photos/34288529/pexels-photo-34288529.jpeg" alt="" />
    <div style={{textAlign:'center', color:textColor }}> 
            <h3 >talha</h3>
            <h4> Haleema</h4>
        </div>
    </div>
</div>
    </>
  )
}
