window.addEventListener(removeLoader(), (event) => {
  
});

function removeLoader(){
  
    setTimeout(()=>{
       let loader = document.querySelector('.loader');
    
    // hide the loader
    loader.style = 'display: none;';
    },
      600);  
  }
  