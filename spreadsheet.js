// Konfigurasi
const SPREADSHEET_ID = '10e8aIsLnl9hezeylHMr_sQRWzUI5A3ZCJdkXkxPUCNQ';
const PRODUCTS_SHEET_NAME = 'Products';
const ORDERS_SHEET_NAME = 'Orders';
const USERS_SHEET_NAME = 'Users';

// Fungsi untuk mengupload produk
async function uploadProductToSheet(productData) {
  try {
    const response = await fetch('YOUR_BACKEND_ENDPOINT/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        spreadsheetId: SPREADSHEET_ID,
        sheetName: PRODUCTS_SHEET_NAME,
        data: productData
      })
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error uploading product:', error);
    return null;
  }
}

// Fungsi untuk mencatat order
async function recordOrder(orderData) {
  // Implementasi serupa untuk order
}

// Fungsi untuk mencatat user baru
async function registerUser(userData) {
  // Implementasi serupa untuk user
}

// Ekspor fungsi jika menggunakan modul
export { uploadProductToSheet, recordOrder, registerUser };
