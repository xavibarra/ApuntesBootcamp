// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //nos traemos los elementos del DOM
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  
  //Extraer el valor del input
  const priceValue = parseFloat(price.innerText); //solo para confirmar que siempre es un numero
  const quantityValue = quantity.valueAsNumber;

  //calcular estos valores
  const subtotalValue = priceValue * quantityValue;

  //obtener el elemento del DOM que contiene el subtotal
  const subTotal = product.querySelector(".subtotal span");

  subTotal.innerText = subtotalValue;
  //return subtotal value para poder usarlo correctamente en la función 
  return subtotalValue;
}

function calculateAll() {
  //Agarar todos los elementos del DOM por cada row
  const products = document.getElementsByClassName('product');

  //Variable que vamos a usar para guardar el valor de cada interacción
  let totalValue = 0

  for (let product of products) {
    totalValue += updateSubtotal(product)
  }
  //darle displa a el valor de este calculo itinerado por html, apuntamos al total
  document.querySelector('#total-value span').innerText = totalValue;

  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  //usamos el parentnode para apuntar al abuelo de row 
  const row = target.parentNode.parentNode
  
  const parent = row.parentNode;

  parent.removeChild(row)
  //lamamos a la función calculateAll() vuelve a calcular los numeros para tener un resultado correcto una vez borremos el producto
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const createRow = document.querySelector(".create-product");
  
  
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);
  

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
   <td class="name">
   <span>${newProdNameValue}</span>
  </td>
  <td class="price">$<span>${newProdPriceValue}</span></td>
  <td class="quantity">
   <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
  `;
  
  
  //agarrar el padre de los rows mediante DOM
  const parent = document.querySelector('#cart tbody');

  //adjuntar variable
  parent.appendChild(newTableRow);

  //recibir logica de botones para poder borrar los productos creados
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  //limpiar los inputs una vez el usuario crea un producto
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  // DOM para borrar productos
  const removeBtns = document.querySelectorAll('.btn-remove');
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }

  //Dom para crear productos
  const createBtn = document.querySelector('#create');
  if (createBtn) {
    createBtn.addEventListener('click', createProduct);
  }

});

