
import './App.css'
import College from './College';



function App() {
const CollegeData=[
    {
        Name: "Premier",
        City: "Karachi",
        Student : [
            {
                Name: "Ali",
                Age: "23"
            },
            {
                Name: "Sara",
                Age: "12"

            }
        ]

    },
    {
        Name: "BufferZone",
        City: "Shadman city",
         Student : [
            {
                Name: "Zaid",
                Age: "23"
            },
            {
                Name: "Chisi",
                Age: "12"

            }
        ]

    }
  ]
  return (
    <>
    {
      CollegeData.map((college, index)=>(
        <div key={index}>
    <College college={college} />
          
        </div>

      ))
    }
    

    </>
  )
}

 

export default App;

