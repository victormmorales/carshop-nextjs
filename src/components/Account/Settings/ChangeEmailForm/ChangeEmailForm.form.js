import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    repeatEmail: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Pon un formato de correo valido").required(true),
    repeatEmail: Yup.string()
      .email(true)
      .required(true)
      .oneOf([Yup.ref("email")], "Los emails no son iguales"),
  });
}
