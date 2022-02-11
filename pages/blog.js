import Layout from "../components/layout";
import Link from "next/link";

const blog =() => (

<Layout>

<header className="text-center">
    <h1>Blog</h1>
</header>

 {/* cards of programming languages */}
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="/css6.jpg" class="card-img-top" alt="..." style={{width: "100%", height: "60%"}}/>
      <div class="card-body">
        <h5 class="card-title">Css</h5>
        <p class="card-text">
        Desde CSS3, el alcance de las especificaciones se incrementó de forma significativa y
         el progreso de los diferentes modulos de CSS comenzó a mostrar varias diferencias,
          lo que hizo más efectivo desarrollar y publicar recomendaciones separadas por módulos.
          
          </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100" >
      <img src="/4.png" class="card-img-top" alt="..." style={{width: "100%", height: "60%"}} />
      <div class="card-body">
        <h5 class="card-title placeholder-glow" >JavaScript</h5>
        <p class="card-text">JavaScript (JS) es un lenguaje de programación ligero, interpretado,
           o compilado justo-a-tiempo (just-in-time) con funciones de primera clase.
            Si bien es más conocido como un lenguaje de scripting (secuencias de comandos)
             para páginas web, y es usado en muchos entornos fuera del navegador.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="/html5.png" class="card-img-top" alt="..." style={{width: "100%", height: "60%"}} />
      <div class="card-body">
        <h5 class="card-title">HTML5</h5>
        <p class="card-text">También se han añadido etiquetas que permiten crear animaciones en 2D,
         con una etiqueta de canvas y
          una API que permiten que puedas dibujar elementos en dos dimensiones y animarlos en la web.
           También se pueden añadir eventos para el teclado, ratón o mandos,
           s que permiten poder utilizarlos para interactuar con una página.</p>
      </div>
    </div>
  </div>
  </div>

<div className="text-center">


  <div id="carouselExampleFade" class="carousel slide carousel-fade py-4" data-bs-ride="carousel" style={{left: "50vh",width:"50%", height:"90%"}}>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="/calcujs.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/generator.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/service.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>



<div className="container text-center">
  <h2>Contacto</h2>
<div class="row align-items-center">
    <div class="col">
      <h3>Correo:</h3>
      <p>kevjob826@gmail.com</p>
    </div>
    <div class="col">
      <h3>Linkedin</h3>
      <p>Kevin López Meza</p>
    </div>
    <div class="col">
      <h3>Creado con:</h3>
      <p>Next.js, Bootstrap</p>
    </div>
  </div>
  </div>
</Layout>



)

export default blog;