// File: scripts/main.js

// ===================== Floating Chat Toggle ===================== //
const chatButton = document.getElementById('chat-button');
const chatBox = document.getElementById('chat-box');

if (chatButton && chatBox) {
  chatButton.addEventListener('click', () => {
    chatBox.style.display = (chatBox.style.display === 'block') ? 'none' : 'block';
  });
}

// ===================== Form Validation ===================== //
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      let valid = true;
      const requiredFields = form.querySelectorAll('input[required], textarea[required], select[required]');

      requiredFields.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.border = '2px solid red';
        } else {
          input.style.border = '';
        }
      });

      if (!valid) {
        alert('Please fill in all required fields.');
        e.preventDefault();
      }
    });
  }
});

// ===================== Dynamic Feedback on Inputs ===================== //
document.querySelectorAll('input, textarea, select').forEach(input => {
  input.addEventListener('input', () => {
    input.style.border = '';
  });
});

// ===================== Helper: Show Message ===================== //
function showMessage(message, type = 'info') {
  const msgBox = document.createElement('div');
  msgBox.textContent = message;
  msgBox.style.position = 'fixed';
  msgBox.style.bottom = '30px';
  msgBox.style.left = '50%';
  msgBox.style.transform = 'translateX(-50%)';
  msgBox.style.padding = '12px 20px';
  msgBox.style.borderRadius = '8px';
  msgBox.style.color = 'white';
  msgBox.style.zIndex = 2000;
  msgBox.style.fontWeight = 'bold';

  switch (type) {
    case 'success': msgBox.style.backgroundColor = '#28a745'; break;
    case 'error': msgBox.style.backgroundColor = '#dc3545'; break;
    default: msgBox.style.backgroundColor = '#007bff';
  }

  document.body.appendChild(msgBox);
  setTimeout(() => msgBox.remove(), 3000);
}
