function toggleNav() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');
}

function clockIn() {
    const status = document.getElementById('status');
    const now = new Date().toLocaleString();
    localStorage.setItem('clockIn', now);
    status.textContent = `Clocked in at ${now}`;
}

function clockOut() {
    const status = document.getElementById('status');
    const now = new Date().toLocaleString();
    localStorage.setItem('clockOut', now);
    status.textContent = `Clocked out at ${now}`;
}

function saveInvoice() {
    const text = document.getElementById('invoice-text').value;
    if (text.trim() === '') {
        alert('Invoice cannot be empty.');
        return;
    }
    const invoices = document.getElementById('saved-invoices');
    const newInvoice = document.createElement('div');
    newInvoice.textContent = text;
    invoices.appendChild(newInvoice);
    document.getElementById('invoice-text').value = '';
}

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
    });
}
