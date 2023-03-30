const persona =[
    new Personas('andres' , 'herrera'),
    new Personas('sara', 'morales'),
    new Personas('celeste', 'herrera')
];

function mostrarPersonas(){
    console.log('mostrar personas');
    let texto = '';
    for( let personas of persona){
        console.log(personas);
        texto += `<li> ${personas.nombre}  ${personas.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const personas = new Personas(nombre.value, apellido.value);
        console.log(personas);
        persona.push(personas);
        mostrarPersonas();
    }
        else{
            console.log('no hay información que agregar');
        }
}