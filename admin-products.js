import { spreadsheetService } from './spreadsheet-service.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load products saat halaman dimuat
        const products = await spreadsheetService.getProducts();
        renderProducts(products);
        
        // Setup form handler
        setupProductForm();
    } catch (error) {
        showError('Gagal memuat data produk');
    }
});

function renderProducts(products) {
    // Implementasi render produk ke tabel
}

function setupProductForm() {
    // Implementasi form handler
}
