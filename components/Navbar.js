import Link from "next/link";


const navbar= () => (


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 
  <div class="container-fluid ">
    <Link href="/">
    <a class="navbar-brand" >Portafolio Web</a>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse " id="navbarColor01">
      <ul class="navbar-nav me-auto ">
       
        <li class="nav-item">
            <Link href="/blog">
            <a class="nav-link" >Blog</a>

            </Link>
         
        </li>
       
        <li class="nav-item">
            <Link href="/Github">
            <a class="nav-link" >Github</a>
            </Link>
         
        </li>
        
      </ul>
     
    </div>
  </div>
  
</nav>


)

export default navbar;
