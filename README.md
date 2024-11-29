# ShoppyGlobe - Basic E-commerce Application

## Developed by
Sabyasachi Sahani (FSD March 2024)

## Github Repository
https://github.com/sibuspd/ShoppyGlobe_e-Comm

## Project Description

ShoppyGlobe is a basic e-commerce web application built using React. It allows users to browse through a list of products, view product details, search for products, and manage a shopping cart.

## Features

- **Component Structure**:
  - `App`: Main component.
  - `Header`: Navigation menu and shopping cart icon.
  - `ProductList`: Displays a list of products.
  - `ProductItem`: Represents a single product, including an “Add to Cart” button.
  - `ProductDetail`: Shows detailed information about a selected product.
  - `Cart`: Displays items added to the cart with options to modify quantities or remove items.
  - `CartItem`: Represents a single item in the cart.
  - `NotFound`: Displays a 404 page for unknown routes.

- **Props**:
  - Utilizes props to pass data from parent components to child components, ensuring functional and reusable components with appropriate prop types.

- **Data Fetching with `useEffect`**:
  - `ProductList` fetches a list of products from an API endpoint.
  - `ProductDetail` fetches details of a selected product based on route parameters.
  - Error handling for failed data fetch requests.

- **State Management**:
  - Implemented using Redux for complex state management.
  - Actions, reducers, and selectors to manage the state of cart items.
  - A search feature to filter products in the `ProductList`.

- **Event Handling**:
  - Buttons in `ProductItem` to add products to the cart.
  - Buttons in `CartItem` to remove products from the cart.

- **React Routing**:
  - Implemented using React Router.
  - Routes for Home, Product Detail, Cart, and Checkout pages.

- **React Lists**:
  - Renders lists of products and cart items with unique keys.

- **Performance Optimization**:
  - Code splitting and lazy loading using `React.lazy` and `Suspense`.

- **Styling**:
  - Responsive design with CSS, ensuring the application works well on different screen sizes.

## Installation

1. Clone the repository:
    git clone https://github.com/sibuspd/shoppyglobe.git
    cd shoppyglobe

2. Install dependencies:
    npm install


3. Start the development server:
    npm start

## Usage

- Visit `http://localhost:3000` in your browser.
- Browse products, add them to the cart, and manage your shopping cart.

## Technologies Used

- React
- Redux
- React Router
- CSS

## Contributing

Contributions are welcome! Please fork the repository and open a pull request with your changes.

## License

This project is uploaded for the partial fulfilment of requirements for passing the FSD course under Internshala Trainings.

