// Regresa los años de diferencia
export const obtenerDiferenciaYear = (year) => {
  return new Date().getFullYear() - year;
};

// Regresa la cantidad por aumentar dependiendo de la marca
export const obtenerAumento = (marca) => {
  let aumento;

  switch (marca) {
    case "americano":
      aumento = 1.15;
      break;
    case "europeo":
      aumento = 1.3;
      break;
    case "asiatico":
      aumento = 1.05;
      break;
    default:
      break;
  }
  return aumento;
};

// Calcula el tipo de seguro

export const obtenerTipoSeguro = (plan) => {
  return plan === "basico" ? 1.2 : 1.5;
};

// Cambia la primer letra

export const primerMayuscula = (texto) => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};
