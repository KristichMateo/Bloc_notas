let API = "http://127.0.0.1:5000";
let boton = document.getElementById("boton_submit");
let usuario = document.getElementById("usuario");
let contrasena = document.getElementById("contrasena");
let mensaje = document.getElementById("mensaje");

boton.addEventListener("click",async function  handle_submit(e) {
    e.preventDefault()
    let usuario_value = usuario.value;
    let contraseña_value = contrasena.value;
    console.log(usuario_value);
    const respuesta = await fetch(`${API}/crear_cuenta`,{
      method:["POST"],
      headers:{"Content-Type":"application/json"
    },
    body: JSON.stringify ({
      usuario_value,
      contraseña_value
    })
    })
    
        let res = await respuesta.json();
        console.log(res);
      if (res.creacion) {
        mensaje.innerHTML = res.mensaje;
      }else{
        mensaje.innerHTML = res.mensaje;
      }
    
  })
  