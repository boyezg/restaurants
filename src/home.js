export default function loadHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
      <h1>Welcome to Our Restaurant</h1>
      <p>The best food in town!</p>
      <img src="https://via.placeholder.com/300" alt="Delicious Food">
    `;
    content.appendChild(homeDiv);
  }
  