import { useState } from "react";
// estados y lógica del formulario//
const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  // se usa para cuando el usuario escribe  en los campos del formulario y se llama
  // a la función handleChange, se actualiza el estado form con los valores actuales
  //  y el valor del campo que se ha cambiado.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
// este  codigo sirve para  validar los campos del formulario de inicio de sesión,
// si el mail es valido y si el password conteien las cantidades de caracteres
  const validate = () => {
    const errs = {};

    if (!form.email.trim()) {
      errs.email = "El email es obligatorio.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = "Ingresa un email válido.";
    }

    if (!form.password) {
      errs.password = "La contraseña es obligatoria.";
    } else if (form.password.length < 6) {
      errs.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    return errs;
  };
  //  evita que se carge la pagina, llama a validate para revisar los datos,
  // si no hay errores muestra  login exitoso, si hay errores muestra revisa los campos

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length === 0) {
      setErrors({});
      setStatus({ type: "success", text: "¡Login exitoso!" });
    } else {
      setErrors(v);
      setStatus({ type: "error", text: "Revisa los campos marcados." });
    }
  };
// boton enviar  si el usuario escribio bien ambos datos solicitados, se habilita el boton  "entrar"
  const canSubmit = form.email && form.password.length >= 6;

  return (
    <div
      className="container"
      style={{ maxWidth: 420, marginTop: 24, marginBottom: 24 }}
    >
      <h2 className="mb-3">Iniciar sesión</h2>

      {status && (
        <div
          className={`alert ${
            status.type === "success" ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {status.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            value={form.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            value={form.password}
            onChange={handleChange}
            placeholder="Tu contraseña"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-dark w-100"
          disabled={!canSubmit}
        >
          A pedir pizza
        </button>
      </form>
    </div>
  );
};

export default LoginPage;