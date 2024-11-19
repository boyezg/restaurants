export default function loadContact() {
    const content = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.innerHTML = `
      <h1>Contact Us</h1>
      <p>Phone: 123-456-7890</p>
      <p>Email: info@restaurant.com</p>
    `;
    content.appendChild(contactDiv);
  }
  