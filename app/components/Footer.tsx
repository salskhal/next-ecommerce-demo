export default function Footer() {
  // get the current year
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>Footer</p>
      <p>
        <small>&copy; {year} FurnishIt All Rights Reserved</small>
      </p>
      <p>
        Developed by{" "}
        <a
          href="
        https://www.linkedin.com/in/salskhal/"
          target="_blank"
          className="text-blue-500"
        >
          Salman-Yusuf Khalid Olaniyi
        </a>
      </p>
    </footer>
  );
}
