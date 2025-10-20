import { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

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

    if (!form.confirm) {
      errs.confirm = "La confirmación es obligatoria.";
    } else if (form.confirm !== form.password) {
      errs.confirm = "Las contraseñas no coinciden.";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length === 0) {
      setErrors({});
      setStatus({ type: "success", text: "¡Registro exitoso!" });
      setForm({ email: "", password: "", confirm: "" });
    } else {
      setErrors(v);
      setStatus({ type: "error", text: "Revisa los campos marcados." });
    }
  };

  const canSubmit =
    form.email && form.password.length >= 6 && form.confirm === form.password;

  return (
    <div className="container" style={{ maxWidth: 420, marginTop: 24, marginBottom: 24 }}>
      <h2 className="mb-3">Crear una cuenta</h2>

      {status && (
        <div
          className={`alert ${status.type === "success" ? "alert-success" : "alert-danger"
            }`}
        >
          {status.text}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
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

        {/* Password */}
        <div className="mb-3">
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

        {/* Confirm */}
        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            name="confirm"
            className={`form-control ${errors.confirm ? "is-invalid" : ""}`}
            value={form.confirm}
            onChange={handleChange}
            placeholder="Confirma tu contraseña"
          />
          {errors.confirm && (
            <div className="invalid-feedback">{errors.confirm}</div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-dark w-100"
          disabled={!canSubmit}
        >
          A pedir Pizza
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;