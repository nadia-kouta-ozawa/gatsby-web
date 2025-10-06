import React from "react";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern portfolio website built with Gatsby, TypeScript, and Tailwind CSS
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              View Projects
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Contact Me
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              TypeScript
            </h3>
            <p className="text-gray-600">
              Type-safe development with modern JavaScript features
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Gatsby
            </h3>
            <p className="text-gray-600">
              Static site generation for optimal performance
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Tailwind CSS
            </h3>
            <p className="text-gray-600">
              Utility-first CSS framework for rapid UI development
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Portfolio - Kouta Ozawa</title>
    <meta name="description" content="Personal portfolio website" />
  </>
);