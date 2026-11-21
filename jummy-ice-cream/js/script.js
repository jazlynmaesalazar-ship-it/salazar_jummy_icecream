document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toastElement = document.getElementById('orderToast');
  const toastMessage = document.getElementById('toastMessage');
  const toast = window.bootstrap && toastElement ? new bootstrap.Toast(toastElement, { delay: 3500 }) : null;

  document.querySelectorAll('.order-link').forEach((button) => {
    button.addEventListener('click', () => {
      const flavor = button.dataset.flavor;
      const price = button.dataset.price;
      if (toastMessage) toastMessage.textContent = `${flavor} selected — ₱${price}. Contact us to complete your order.`;
      if (toast) toast.show();
      else window.alert(`${flavor} selected — ₱${price}. Contact us to complete your order.`);
    });
  });

  // Close the mobile navigation after a navigation link is selected.
  document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      if (nav && nav.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
});
