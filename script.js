
var myImage = document.querySelector('#sprites');
var myName = document.querySelector('#name');
var myType = document.querySelector('#type');
var myVersion = document.querySelector('#version');

for 
   (let pokedata = 1; pokedata < 10; pokedata++) {
        // Execute 10 fois
        // À chaque éxécution, la variable "pokedata" augmentera de 1
        // Lorsque'elle sera arrivée à 5, le boucle se terminera.

                // Img Pokemon
            fetch('https://pokeapi.co/api/v2/pokemon?offset=1&limit=10')
                // console.log(pokedata.sprites)
                    .then((pokedata) => pokedata.json()
                        
                        .then(pokedata => {
                            console.log(pokedata.sprites.front_default)
                                                //  pokedata.sprites = pokedata[0].url Rien
                                myImage.setAttribute( "src", pokedata.sprites.front_default);
                            })
                    //  return pokedata.json ();
                        //.then(function(list.) { 
                        //console.log(list)
                         )
                        // Name Pokemon     
                fetch('https://pokeapi.co/api/v2/pokemon/1/')
                            
                            .then((pokedata) => pokedata.json()
                                .then(pokedata =>   { 
                                    console.log(pokedata.name)
                                        myName.innerHTML = pokedata.name;

                            })
                            )

                            fetch('https://pokeapi.co/api/v2/pokemon?offset=1&limit=10')
                            .then((pokedata) => pokedata.json()
                                .then(pokedata =>{
                                    console.log(pokedata)
                                })
                            )
                                 
                            
                            
}
        
                

                    // Type Pokemon     
                   // fetch('https://pokeapi.co/api/v2/pokemon?offset=1&limit=10')
                    // .then((pokedata) => pokedata.json()
                       // .then(pokedata =>   { 
                         //   console.log(pokedata.version.name)
                        

              //  })
            //)
                           // Img Pokemon


    function refresh(url){
        fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor((Math.random() + 6) * 3) + "/")
        .then(res => res.json())
        .then((data) => {
            myImage.setAttribute('src', data.sprites.front_default)
            myName.innerHTML = data.name;
        })
    }





//    const spicies  = "Fire";
//    spicies.innerHTML = test;