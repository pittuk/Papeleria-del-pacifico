/**
 * ==========================================================================
 * FORM VALIDATION JAVASCRIPT - Papelera del Pacífico
 * Validación de formularios
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', function() {
  initFormValidation();
});

/**
 * Inicializar validación de formularios
 */
function initFormValidation() {
  const contactForm = document.querySelector('.contact-form form');

  if (!contactForm) {
    return;
  }

  // Prevenir envío del formulario y validar
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Limpiar errores previos
    clearFormErrors();

    // Validar formulario
    if (validateForm()) {
      submitForm();
    }
  });

  // Validación en tiempo real (al salir del campo)
  const formInputs = contactForm.querySelectorAll('input, textarea, select');
  formInputs.forEach(input => {
    input.addEventListener('blur', function() {
      validateField(this);
    });

    // Limpiar error al empezar a escribir
    input.addEventListener('input', function() {
      if (this.classList.contains('form-input--error')) {
        this.classList.remove('form-input--error', 'form-textarea--error');
        const errorElement = this.parentElement.querySelector('.form-error');
        if (errorElement) {
          errorElement.remove();
        }
      }
    });
  });

  /**
   * Validar todo el formulario
   */
  function validateForm() {
    let isValid = true;
    const formInputs = contactForm.querySelectorAll('input, textarea, select');

    formInputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Validar un campo individual
   */
  function validateField(field) {
    const fieldType = field.type;
    const fieldValue = field.value.trim();
    const fieldName = field.name;
    const isRequired = field.hasAttribute('required');

    // Si el campo no es requerido y está vacío, es válido
    if (!isRequired && fieldValue === '') {
      return true;
    }

    // Validar campos requeridos
    if (isRequired && fieldValue === '') {
      showFieldError(field, 'Este campo es obligatorio');
      return false;
    }

    // Validaciones específicas por tipo
    switch (fieldType) {
      case 'email':
        if (!isValidEmail(fieldValue)) {
          showFieldError(field, 'Por favor ingresa un email válido');
          return false;
        }
        break;

      case 'tel':
        if (!isValidPhone(fieldValue)) {
          showFieldError(field, 'Por favor ingresa un teléfono válido');
          return false;
        }
        break;

      case 'text':
        if (fieldName === 'name' && fieldValue.length < 2) {
          showFieldError(field, 'El nombre debe tener al menos 2 caracteres');
          return false;
        }
        break;

      case 'textarea':
        if (fieldValue.length < 10) {
          showFieldError(field, 'El mensaje debe tener al menos 10 caracteres');
          return false;
        }
        break;
    }

    return true;
  }

  /**
   * Validar formato de email
   */
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validar formato de teléfono (básico)
   */
  function isValidPhone(phone) {
    // Permitir números, espacios, guiones y paréntesis
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(phone) && cleanPhone.length >= 8;
  }

  /**
   * Mostrar error en un campo
   */
  function showFieldError(field, message) {
    field.classList.add('form-input--error', 'form-textarea--error');

    // Crear elemento de error si no existe
    let errorElement = field.parentElement.querySelector('.form-error');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'form-error';
      field.parentElement.appendChild(errorElement);
    }

    errorElement.textContent = message;

    // Focus en el primer campo con error
    if (!contactForm.querySelector('.form-input--error:focus')) {
      field.focus();
    }
  }

  /**
   * Limpiar todos los errores del formulario
   */
  function clearFormErrors() {
    const errorInputs = contactForm.querySelectorAll('.form-input--error, .form-textarea--error');
    errorInputs.forEach(input => {
      input.classList.remove('form-input--error', 'form-textarea--error');
    });

    const errorMessages = contactForm.querySelectorAll('.form-error');
    errorMessages.forEach(error => error.remove());
  }

  /**
   * Enviar formulario
   */
  function submitForm() {
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const formData = new FormData(contactForm);

    // Deshabilitar botón durante el envío
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    // Aquí iría la lógica real de envío (AJAX, API, etc.)
    // Por ahora, simulamos el envío
    setTimeout(() => {
      // Mostrar mensaje de éxito
      showSuccessMessage();

      // Reset del formulario
      contactForm.reset();

      // Rehabilitar botón
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar Mensaje';

      // Log de datos (remover en producción)
      console.log('Formulario enviado con los siguientes datos:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    }, 1500);
  }

  /**
   * Mostrar mensaje de éxito
   */
  function showSuccessMessage() {
    // Eliminar mensaje existente si lo hay
    const existingMessage = contactForm.querySelector('.success-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Crear nuevo mensaje
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div>
        <strong>Mensaje enviado correctamente</strong><br>
        Nos pondremos en contacto contigo pronto.
      </div>
    `;

    // Insertar al inicio del formulario
    contactForm.insertBefore(successMessage, contactForm.firstChild);

    // Hacer scroll al mensaje
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Eliminar mensaje después de 5 segundos
    setTimeout(() => {
      successMessage.style.opacity = '0';
      setTimeout(() => {
        successMessage.remove();
      }, 300);
    }, 5000);
  }
}

/**
 * Prevenir envío de formularios con Enter (excepto en textarea)
 */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
    const form = e.target.closest('form');
    if (form) {
      e.preventDefault();
    }
  }
});
