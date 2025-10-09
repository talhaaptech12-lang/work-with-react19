import React from 'react'

export default function Todo() {

    function callfunc(){
    alert("This is button")
    }
  return (
    <div>
        <h1>This is talha's react</h1>
        <img src="https://www.istockphoto.com/photo/freedom-chains-that-transform-into-birds-charge-concept-gm1322104312-408167035?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&utm_medium=affiliate&utm_source=unsplash&utm_term=free+images%3A%3A%3A" alt="" />
        <ul>
            <li>This is image</li>
            <li>dont know</li>
            <li>How to do add image.</li>
        </ul>
        <button onClick={callfunc}>click me</button>
    </div>
  )
}
