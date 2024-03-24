let who = ["El Perro", "Mi Abuela", "El Cartero", "Mi Pajaro"];
let action = ["Se Comio", "Orino", "Aplasto", "Quebro"];
let what = ["Mi Tarea", "Mi Telefono", "El Carro", "La Tele"];
let when = [
  "Antes de Clase",
  "Cuando Dormia",
  "Mientras Hacia Ejercicio",
  "Mientras Almorzaba",
  "Mientras Rezaba"
];

function GeneradorEscusa(who, action, what, when) {
  let nWho = Math.floor(Math.random() * who.length);
  let nAction = Math.floor(Math.random() * action.length);
  let nWhat = Math.floor(Math.random() * what.length);
  let nWhen = Math.floor(Math.random() * when.length);
  return (
    "..." +
    who[nWho] +
    " " +
    action[nAction] +
    " " +
    what[nWhat] +
    " " +
    when[nWhen]
  );
}

function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = GeneradorEscusa(who, action, what, when);
}
window.onload = onLoad;
