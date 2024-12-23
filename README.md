# shopcardreact
shopcardreact

live preview link- https://shopcardreact.netlify.app



# Product Detail & Add to Cart

This project is a responsive product detail page built with **React**, **JavaScript**, and **useContext**. The page allows users to select product options such as color, size, and quantity while dynamically updating the product image, price, and cart details.

## Features

### 1. Dynamic Color Selection
- Users can select a product color from the available options.
- The product image updates dynamically to reflect the selected color.

### 2. Dynamic Size Selection
- Users can choose the size of the product (e.g., S, M, L, XL).
- The price updates based on the selected size.

### 3. Quantity Adjustment
- Users can increase or decrease the quantity of the product before adding it to the cart.

### 4. Add to Cart Functionality
- When a product is added to the cart, the following details are included:
  - Product image
  - Product name
  - Selected size
  - Selected color
  - Quantity
  - Price

### 5. Shopping Cart Overview
- The cart displays a detailed summary of the selected products, including the total quantity and price.

## Technologies Used

- **React**: For building the user interface and managing component states.
- **JavaScript**: For handling logic and functionality.
- **useContext**: For global state management (e.g., managing cart items and product selections).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-detail-add-to-cart.git
   ```

2. Navigate to the project directory:
   ```bash
   cd product-detail-add-to-cart
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Usage

1. Navigate to the product detail page.
2. Select a color from the available options to see the product image update.
3. Choose a size to see the price adjust dynamically.
4. Adjust the quantity using the `+` and `-` buttons.
5. Click on the "Add to Cart" button to add the product to your cart.
6. View your cart to see a summary of the added products.

## Project Structure

```
src/
|-- components/
|   |-- ProductDetail.js   # Product detail component
|   |-- Cart.js            # Shopping cart component
|-- context/
|   |-- CartContext.js     # useContext for global state management
|-- App.js                 # Main application file
|-- index.js               # Entry point
```

## Screenshots

### Product Detail Page
![Screenshot 2024-12-23 220336](https://github.com/user-attachments/assets/f046a72e-2004-4a2d-a530-63d429b4165b)


### Shopping Cart
![Screenshot 2024-12-23 220250](https://github.com/user-attachments/assets/0682da1a-ef0f-48e4-84e1-ef4c5dcb7e25)

## Future Improvements
- Implement backend integration for cart persistence.
- Add user authentication for personalized cart management.
- Enhance responsiveness for a wider range of devices.

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.

## License
This project is licensed under the MIT License.
