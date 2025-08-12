class SpreadsheetService {
    constructor() {
        this.baseUrl = 'https://your-backend-api.com';
    }
    
    // Ambil data produk dari spreadsheet via backend
    async getProducts() {
        try {
            const response = await fetch(`${this.baseUrl}/api/products`);
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }
    
    // Tambah produk baru
    async addProduct(productData) {
        try {
            const response = await fetch(`${this.baseUrl}/api/products`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) throw new Error('Failed to add product');
            return await response.json();
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    }
    
    // Fungsi lain untuk order, users, dll.
}

// Ekspor instance untuk digunakan di file lain
export const spreadsheetService = new SpreadsheetService();
