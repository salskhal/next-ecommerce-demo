# E-Commerce Demo Project

## Overview

This is a demo e-commerce project built with **Next.js** **TypeScript** and **Tailwind CSS**, showcasing the capabilities of a modern web application with a focus on performance, responsiveness, and maintainability. The application provides a complete product listing interface, along with admin CRUD (Create, Read, Update, Delete) functionality for managing products.

### Key Features

- **Next.js** for a fast and scalable front-end with server-side rendering (SSR) and static site generation (SSG) capabilities.
- **Tailwind CSS** for a responsive, utility-first design system that ensures the application looks great on all devices.
- **Zustand** for state management, enabling efficient and scalable state handling across the application.
- **Local Storage** as a simple data persistence layer for the demo. The application is populated with a predefined set of data stored in the browser's local storage, allowing for quick demos without the need for an external database.
- **Random Image Assignment**: Since image upload functionality is not implemented, a JSON file with multiple image URLs is used. When creating a product, a random image URL is selected and attached to the product object.
- **SEO Optimizations**: Server-side rendered pages with dynamically generated metadata based on product details to enhance search engine visibility.

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (v6 or later)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git https://github.com/salskhal/next-ecommerce-demo
   cd github-clone
2. **Install Dependencies:**
   ```bash
   npm install
   # or if you use Yarn
   yarn install
3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add the following environment variables:
   ```bash
   UNSPLASH_ACCESS_KEY=
   UNSPLASH_SECRET_KEY=
   ```
   Replace `UNSPLASH_ACCESS_KEY & UNSPLASH_SECRET_KEY` with your UNSPLASH access and secret key. 
4. **Start the development server:**
   ```bash
    npm run dev
    # or if you use Yarn
    yarn dev
5. **Open the browser and navigate to `http://localhost:3000`**

## Design Decisions and Trade-offs

### State Management

**Zustand** was chosen for state management due to its lightweight nature and simplicity compared to other state management libraries like Redux. Zustand allows for a more straightforward setup while still providing powerful features for managing global state efficiently.

### Data Persistence

**Local Storage** was used for data persistence as a temporary solution to avoid setting up a backend database for this demo. This decision simplifies the project setup and focuses on front-end development. However, it also means that data is not shared across sessions or devices and is reset when the browser's local storage is cleared.

### Image Handling

- **Random Image Assignment**: To simplify the demo, a JSON file containing multiple image URLs was created. When a new product is created, the application randomly selects one of these URLs to use as the product image. This avoids the complexity of implementing an image upload feature.

- **Unsplash API Integration (Optional)**: An initial plan was to use the Unsplash API to dynamically fetch random images based on product categories. However, due to implementation challenges, this was deferred in favor of using pre-defined image URLs for simplicity.

### Next.js Image Optimization

- **Next.js Image Component**: The Next.js `<Image />` component was utilized to optimize images for performance, including features like lazy loading and automatic image size adjustment based on the device and screen resolution. This helps reduce the page load time and improves the user experience, particularly on slower networks.

## SEO Considerations

- **Server-Side Rendering (SSR)**: Next.js's server-side rendering capability was leveraged to generate pages with pre-rendered HTML on the server, enhancing SEO by making content more accessible to search engine crawlers.

- **URL Structure**: Clean, readable URLs are used throughout the application, which is an important factor for both SEO and user experience.

## Conclusion

This project demonstrates a modern e-commerce application built with cutting-edge web technologies. While it's designed as a demo with simplified data handling and no backend, it showcases essential features like state management, responsive design, and SEO best practices. Future enhancements could include adding a real backend for data persistence, implementing user authentication, and integrating with external APIs for more dynamic content.
