import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
            <div className="space-x-6">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">
                Home
              </a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">
                About
              </a>
              <a href="/projects" className="text-gray-600 hover:text-blue-600 transition duration-300">
                Projects
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Kouta Ozawa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;