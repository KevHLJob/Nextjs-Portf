import Navbar from "./Navbar";
import Footbar from "./footer";
const layout = ({children}) => (

<>
<Navbar/>



<main className="container py-4">
{children}
</main>


{/* idea por Fazt code */}

<Footbar/>

</>


)

export default layout;