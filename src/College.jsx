export default function College({college}) {
  
  
    return (
    <div>
        <h3>College Details With Students</h3>
      <h1>Name : {college.Name}</h1>
          <ul>
           <h4> <li>City: {college.City}
            </li></h4>
            <li>
              <h4>Students Data</h4>
              {
                college.Student.map((student)=>(
                  <ul>
                    <li>Name : {student.Name}</li>
                    <li>AGe : {student.Age}</li>
                  </ul>
                  
                ))
              }
            </li>
            
            </ul>
             
    {/* <Student Student={college.Student}/> */}
           
        
    </div>
  )
}
