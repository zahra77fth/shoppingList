
# Shopping List Application (Vue 3 + TypeScript + Vite)
This project demonstrates how to build a dynamic shopping list application. Users can add items to a list, check or uncheck them, and delete checked items. It fetches product data from an external API and uses Vue 3's Composition API with TypeScript to manage state and behavior.


## Features

- View Products: Fetch and display products with their images and titles.

- Add New Items: Users can add new items to the shopping list.

- Mark items as completed or uncompleted by toggling a checkbox.

-  Delete Checked Items: Remove all checked items from the list.

- Fallback Images: If an image is missing or cannot be loaded, a default fallback image is shown.


## Installation

To set up the project locally, follow these steps:

```bash
  git clone <https://github.com/zahra77fth/shoppingList.git>
  cd shoppingList
  npm install
  npm run dev
```
The application will be available at http://localhost:5173.

## Tech Stack

**Client:** Vue, TypeScript, TailwindCSS, Axios, Vite

## Project Structure

```bash
src/
│
├── components/                # Contains all Vue components
│   ├── ProductItem.vue         # Component to display individual product items
│   └── ShoppingList.vue        # Component to manage and display the entire shopping list
│
├── types/
│   └── types.ts               # TypeScript types and interfaces for the app
│
├── assets/                    # Static assets like images, stylesheets, etc.
│   └── fallback.png            # Fallback image used for products without images
│
├── App.vue                    
├── main.ts                    
├── styles.css                 
└── vite.config.ts             # Vite configuration file
```

## Thank You! 🎉

Thanks a bunch for checking out the Shopping List app! I hope it helps keep your groceries (and sanity) in check. 🛒💡

Now go forth and conquer that shopping list, one checkbox at a time! ✔️✨

Happy coding! 🚀👨‍💻👩‍💻



