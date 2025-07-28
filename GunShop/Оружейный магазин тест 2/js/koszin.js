let cartItems = [];

// Функция для обновления отображения корзины
function updateCart() {
  const cartTableBody = document.querySelector('.cart tbody');
  cartTableBody.innerHTML = '';

  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="item-quantity" />
      </td>
      <td>${item.price} руб.</td>
      <td>${itemTotal} руб.</td>
      <td><button class="remove-item" data-index="${index}">Удалить</button></td>
    `;

    cartTableBody.appendChild(row);
  });

  document.getElementById('total-price').textContent = totalPrice + ' руб.';
}

// Обработчик события добавления товара в корзину
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const name = product.querySelector('h3').textContent;
    const price = parseFloat(product.querySelector('.price').textContent);

    const existingItem = cartItems.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({ name, price, quantity: 1 });
    }

    updateCart();
  });
});

// Добавляем обработчик для удаления товаров
document.body.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
      const index = event.target.getAttribute('data-index');
      cartItems.splice(index, 1);
      updateCart();
    }
  });
  
