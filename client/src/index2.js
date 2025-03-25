import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from react-dom/client
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const img_1="https://picsum.photos/200/300";
const myFirstElement =  
<>
<h1 style={{backgroundColor:"red"}}>Hello World</h1>
<p>Mohit lorem maukxgysxhgusxgvxsyxftvhg</p>
<img src={img_1} alt='image'/>

    <div className="container bg-info">hello World</div>

</>

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(
myFirstElement
); // Render content inside the root