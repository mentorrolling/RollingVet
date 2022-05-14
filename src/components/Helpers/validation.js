const regExpNombre = /^[A-Za-z\s?]+$/;
const regExpEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExpNumero = /^([0-9])*$/;
const regExpFecha = /^\d{2}\/\d{2}\/\d{4}$/;
const regExpHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/;
const regExpTxtArea = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;

export const validateNombre = (campo) => {
  if (
    regExpNombre.test(campo) &&
    campo.trim().length < 30 &&
    campo.trim().length > 8 &&
    campo !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = (campo) => {
  if (
    regExpEmail.test(campo) &&
    campo.trim().length < 45 &&
    campo.trim().length > 15 &&
    campo !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateNumero = (campo) => {
  if (
    regExpNumero.test(campo) &&
    campo.trim().length < 13 &&
    campo.trim().length > 7 &&
    campo !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateFecha = (campo) => {
  if (regExpFecha.test(campo) && campo.trim() !== "") {
    return true;
  } else {
    return false;
  }
};

export const validatetextarea = (campo) => {
  if (
    regExpTxtArea.test(campo) &&
    campo.trim().length < 50 &&
    campo.trim().length > 10 &&
    campo !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateHora = (field) => {
  if (
    regExpHora.test(field) &&
    field.trim() !== "" &&
    (field === "10:00" ||
      field === "11:00" ||
      field === "12:00" ||
      field === "13:00" ||
      field === "16:00" ||
      field === "17:00" ||
      field === "18:00" ||
      field === "19:00" ||
      field === "20:00")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateMesage = (campo) => {
  if (regExpTxtArea.campo.length < 300 && campo.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const validateProf = (field) => {
  if (
    regExpNombre.test(field) &&
    field.trim() !== "" &&
    (field === "Dra Liza Morgan" || field === "Dr Adrian Munir")
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateEspecie = (field) => {
  if (
    regExpNombre.test(field) &&
    field.trim() !== "" &&
    (field === "Perro" || field === "Gato" || field === "Otro")
  ) {
    return true;
  } else {
    return false;
  }
};
