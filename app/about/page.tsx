export default function About() {
    return (
      <main className="min-h-screen">
        <div className="px-6 md:px-12 lg:px-32 py-12 bg-[#F6F5FF]">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            About this project
          </h1>
        </div>
        <div className="px-6 md:px-12 lg:px-32 py-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            This is a demo e-commerce project built with{" "}
            <span className="font-semibold">Next.js</span> and{" "}
            <span className="font-semibold">Tailwind CSS</span>, demonstrating a
            modern web application's capabilities with a focus on performance and
            responsive design.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            The project utilizes <span className="font-semibold">Zustand</span>{" "}
            for state management, allowing efficient and scalable state handling
            across the application. It features a comprehensive product listing
            interface, along with admin CRUD (Create, Read, Update, Delete)
            functionality for product management.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            <span className="font-semibold">Note:</span> No external database was
            used for this project. The application is initially populated with a
            predefined set of data, which is stored and managed using the
            browser's local storage. This approach allows for a simplified demo
            while retaining core functionalities.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            <span className="font-semibold">Key Features:</span>
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-4">
            <li>Responsive design that works seamlessly across all devices.</li>
            <li>
              Efficient state management with <span className="font-semibold">Zustand</span> for scalable and maintainable code.
            </li>
            <li>
              Dynamic routing and server-side rendering (SSR) for improved SEO and performance.
            </li>
            <li>
              Comprehensive admin functionality to manage products, including adding, editing, and deleting products.
            </li>
            <li>
              Local storage-based data handling to simulate a database-free environment.
            </li>
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed mt-8">
            <span className="font-semibold">Technologies Used:</span>
          </p>
          <ul className="list-disc list-inside text-lg text-gray-600 mt-4">
            <li>Next.js for server-side rendering and static site generation.</li>
            <li>Tailwind CSS for fast and efficient styling.</li>
            <li>Zustand for state management across the application.</li>
            <li>TypeScript for type safety and improved developer experience.</li>
          </ul>
        </div>
      </main>
    );
  }
  