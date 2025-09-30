# 📄 Formulario Interactivo con Validación - Adrian Vargas
## Hecho por: **Adrián Felipe Vargas Rivera**

Este proyecto es una práctica sencilla pero muy útil de un **formulario HTML** que incluye **estilos visuales modernos** con CSS y **validación de campos usando JavaScript**. Su objetivo es enseñar cómo capturar datos de entrada, validar campos vacíos y proporcionar retroalimentación visual al usuario mediante `alert()`.

---

## 📸 Capturas de Pantalla


| Visual general | Campos vacíos | Formulario correcto |
|----------------|----------------|---------------------|
| ![Visual](./images/formulario-visual.png) | ![Vacíos](./images/formulario-vacio.png) | ![Correcto](./images/formulario-completo.png) |

---

## 🚀 Características

✅ Formulario responsivo con fondo en degradado  
✅ Estilo limpio y moderno con `CSS3`  
✅ Validación en `JavaScript` sin recargar la página  
✅ Alerta informativa con los datos ingresados  
✅ Prevención del envío si los campos están vacíos o el check no está marcado

---

## 📁 Estructura del Proyecto

```

📁 / (raíz del proyecto)
│
├── index.html       → Estructura del formulario
├── styles.css       → Estilos visuales modernos
├── app.js           → Validación y lógica del formulario
├── /images          → Imágenes de demostración

````

---

## 🧱 Explicación del Código

### 1. 📄 HTML - `index.html`

Contiene la estructura del formulario, incluyendo:

```html
<form class="formulario">
  <label for="input-text">
    Texto:
    <input type="text" id="input-text" class="input" />
  </label>

  <label for="input-password">
    Contraseña:
    <input type="password" id="input-password" class="input" />
  </label>

  <label for="input-check">
    Acepta Términos y Condiciones:
    <input type="checkbox" id="input-check" />
  </label>

  <button id="button">Enviar</button>
</form>
````

> 🧠 Cada campo tiene su `id` para poder ser accedido con JavaScript.

---

### 2. 🎨 CSS - `styles.css`

#### Fondo con degradado:

```css
body {
  background: linear-gradient(
    90deg,
    hsla(265, 53%, 29%, 1) 0%,
    hsla(24, 93%, 73%, 1) 100%
  );
}
```

#### Centrado del formulario:

```css
.formulario {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 3rem;
}
```

#### Botón con hover:

```css
#button:hover {
  background: linear-gradient(
    90deg,
    hsla(213, 77%, 14%, 1) 0%,
    hsla(202, 27%, 45%, 1) 100%
  );
  color: #f2f2f2;
}
```

> 🎨 Se utilizan degradados suaves y fuentes claras para mejor contraste visual.

---

### 3. ⚙️ JavaScript - `app.js`

Este archivo es el encargado de validar los datos antes de "enviar" el formulario.

#### Referencias a los elementos del DOM:

```javascript
const button = document.getElementById("button");
const inputText = document.getElementById("input-text");
const inputPassword = document.getElementById("input-password");
const inputCheck = document.getElementById("input-check");
```

#### Validación al hacer clic en el botón:

```javascript
button.addEventListener("click", (e) => {
  e.preventDefault(); // Evita que se envíe el formulario

  const textValue = inputText.value.trim();
  const passwordValue = inputPassword.value.trim();
  const checkValue = inputCheck.checked;

  if (!textValue || !passwordValue || !checkValue) {
    alert("Por favor, rellene todos los campos y marque el check.");
    return;
  }

  alert(
    "Texto: " +
      textValue +
      "\nContraseña: " +
      passwordValue +
      "\nCheck: " +
      (checkValue ? "Marcado" : "No marcado")
  );
});
```

#### ¿Qué hace este código?

* Evita el comportamiento por defecto del botón (`e.preventDefault()`).
* Verifica que:

  * El campo de texto no esté vacío
  * La contraseña no esté vacía
  * El checkbox esté marcado
* Si todo es correcto, muestra una `alert` con los datos ingresados.

---

## 🧪 Casos de Uso

| Escenario                    | Resultado Esperado                                        |
| ---------------------------- | --------------------------------------------------------- |
| ✅ Todos los campos completos | Muestra alerta con los datos ingresados                   |
| ❌ Texto o contraseña vacíos  | Muestra alerta indicando que se deben rellenar los campos |
| ❌ Checkbox sin marcar        | Muestra alerta indicando que se debe aceptar el check     |

---

## ✅ Cómo Usar

1. Clona el repositorio o descarga los archivos:

   ```bash
   git clone https://github.com/tu-usuario/formulario-validacion.git
   cd formulario-validacion
   ```

2. Abre el archivo `index.html` en tu navegador.

3. Completa el formulario:

   * Escribe un texto
   * Escribe una contraseña
   * Marca la casilla de términos y condiciones

4. Haz clic en **Enviar**.

---

## 🙌 Créditos
Proyecto realizado por **Adrian Vargas** como ejercicio práctico.
Degradados generados con [CSS Gradient](https://cssgradient.io/)
---