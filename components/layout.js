import Navbar from "./Navbar";
import Head from "next/head";

const layout = ({children}) => (

<>
<Navbar/>



<main className="container py-4">
{children}
</main>


{/* idea por Fazt code */}
<footer className="bg-dark text-light text-center">
    <div className="container p-4">
        <h3>&copy; Ing:Kevin López Meza</h3>
        
    </div>
</footer>

</>


)

export default layout;