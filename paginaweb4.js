

let bmas = document.getElementById('botonmas');
bmas.addEventListener('click', Mas);

let bexplorar = document.getElementById('botonexplorar');
bexplorar.addEventListener('click', explorar);

let bactual = document.getElementById('botonactual');
bactual.addEventListener('click', actual);

let bbuscar = document.getElementById('botonbuscar');
bbuscar.addEventListener('click', buscar);

let bsubir = document.getElementById('subir');
bsubir.addEventListener('click', subir)

let bparte = document.getElementById('parte');
bparte.addEventListener('click', parte);


function Mas(){
     
  window.open('https://pixabay.com/es/images/search/paisaje/', 'width=300 ,height=200');
}

function explorar (){
     
    window.open('https://www.google.com/intl/es-419/earth/', 'width=300 ,height=200')
  }

  function actual(){
     
    window.open('https://pixabay.com/es/images/search/paisaje/', 'width=300 ,height=200');
  }

  function buscar(){
     
    window.open('https://www.shutterstock.com/es/search/paisajes+naturales+con+agua?PPC_GOO_AR_IG-555032787759&cr=c&kw=&c3apidt=71700000068164985&gclsrc=ds&gclsrc=ds', 'width=300 ,height=200');
  }

  function subir(){
    window.scrollTo({
      top : 0,
      behavior : 'smooth'  
    })
  }

  function parte(){
    window.scrollTo({
        top : 0,
        behavior : 'smooth'  
    })
  }

