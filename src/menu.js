export default function loadMenu() {
    const content = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.innerHTML = `
      <h1>Our Menu</h1>
      <ul>
        <li>Pizza - $10</li>
        <li>Burger - $8</li>
        <li>Salad - $7</li>
      </ul>
    `;
    content.appendChild(menuDiv);
  }
  