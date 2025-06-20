function showLogin() {
  document.getElementById('loginModal').style.display = 'flex';
}


function showSignup() {
  document.getElementById('signupModal').style.display = 'flex';
}


function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('signupModal').style.display = 'none';
}


let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
}


function viewCart() {
  alert("Redirecting to the cart page (to be implemented)");
}


window.onclick = function(event) {
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  if (event.target === loginModal || event.target === signupModal) {
    closeModal();
  }
function handleLogin() {
  closeModal();
  showSuccessMessage();
}

function handleSignup() {
  closeModal();
  showSuccessMessage();
}

function showSuccessMessage() {
  const successModal = document.getElementById('successMessage');
  successModal.style.display = 'flex';
  setTimeout(() => {
    successModal.style.display = 'none';
  }, 2000); 
}

};