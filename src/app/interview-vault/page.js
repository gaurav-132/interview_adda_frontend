"use client";

import Image from "next/image";
import { useState } from "react";

const questionsData = [
  {
    question: "What are the key differences between an array and a linked list?",
    answer: `
      - **Memory Allocation:** Arrays use contiguous memory, whereas linked lists use dynamic memory allocation.
      - **Insertion/Deletion:** Arrays have O(n) complexity for insertion/deletion (except at the end), while linked lists allow O(1) insertion/deletion at the beginning or middle.
      - **Access Speed:** Arrays provide O(1) access via indexing, while linked lists require O(n) traversal.
    `,
  },
  {
    question: "What is the time complexity of quicksort?",
    answer: `
      - **Best/Average Case:** O(n log n)
      - **Worst Case:** O(n²) (when the pivot selection is poor)
      - **In-Place Algorithm:** Yes, quicksort does not require extra space like merge sort.
    `,
  },
  {
    question: "How does a stack differ from a queue?",
    answer: `
      - **Stack:** Follows LIFO (Last In, First Out) principle.
      - **Queue:** Follows FIFO (First In, First Out) principle.
      - **Operations:** Stack supports push/pop, while queue supports enqueue/dequeue.
    `,
  },
];

const topics = [
  "Full Stack Development",
  "Data Structures & Algorithms",
  "System Design",
  "DevOps",
  "Cyber Security",
  "Finance",
  "Banking",
  "Aptitude",
];

const InterviewVault = () => {
  const [openIndex, setOpenIndex] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleQuestion = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white shadow-md z-50">
        <h1 className="text-2xl font-bold text-indigo-600">InterviewAdda</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center space-x-6">
          <a href="/interview-vault" className="hover:text-indigo-600">The Interview Vault</a>
          <a href="#" className="hover:text-indigo-600">Resume Generator</a>
          <a href="#" className="hover:text-indigo-600">Roadmap</a>
          <a href="#" className="hover:text-indigo-600">Mock Interview</a>
          <a href="#" className="hover:text-indigo-600">About Us</a>
        </nav>

        {/* Login / Signup */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white">Login</button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Signup</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center">
          <Image src={menuOpen ? "/images/close.png" : "/images/menu.png"} width={24} height={24} alt="Menu" />
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-4 md:hidden">
          <a href="/interview-vault" className="hover:text-indigo-600">The Interview Vault</a>
          <a href="#" className="hover:text-indigo-600">Resume Generator</a>
          <a href="#" className="hover:text-indigo-600">Roadmap</a>
          <a href="#" className="hover:text-indigo-600">Mock Interview</a>
          <a href="#" className="hover:text-indigo-600">About Us</a>
          <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Signup</button>
        </div>
      )}

      {/* Topics Bar */}
      <div className="mt-16 flex items-center w-full bg-indigo-500 text-white py-2 px-4 h-12 ">
       
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)} 
          className="text-white text-2xl px-1 mt-1 md:hidden"
        >
          &#9776; 
        </button>
     
        <button className="hidden md:block text-white text-2xl px-2 mt-2">
          &#8249; 
        </button>
      
        <div className="flex space-x-2 w-full mx-1 mt-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {topics.map((topic, index) => (
            <span key={index} className="px-4">{topic}</span>
          ))}
        </div>

        <button className="hidden md:block text-white text-2xl px-2 mt-2">
          &#8250; 
        </button>
      </div>

      {/* Layout */}
      <div className="flex flex-1 h-full">
        {/* Sidebar (Hidden on Mobile) */}
        <aside className={`w-60 bg-indigo-100 h-full overflow-y-auto p-4 fixed transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
  <h2 className="text-lg font-bold mb-4 text-center">DSA Topics</h2>
  <ul className="space-y-2">
    <li className="text-indigo-600 font-semibold text-center pb-2 border-b border-gray-300">Arrays</li>
    <li className="text-gray-700 text-center pb-2 border-b border-gray-300">Strings</li>
    <li className="text-gray-700 text-center pb-2 border-b border-gray-300">Linked Lists</li>
    <li className="text-gray-700 text-center pb-2 border-b border-gray-300">Stacks</li>
    <li className="text-gray-700 text-center pb-2 border-b border-gray-300">Queues</li>
  </ul>
</aside>


        {/* Questions & Answers */}
        <main className="flex-1  p-6 overflow-y-auto h-[calc(100vh-64px)]">
          <div className="max-w-4xl mx-auto space-y-4 mb-15">
            {questionsData.map((item, index) => (
              <div key={index} className="mb-6">
                <div
                  onClick={() => toggleQuestion(index)}
                  className={`flex items-center p-4 bg-white shadow-md rounded-lg cursor-pointer transition-all border-l-4 ${openIndex.includes(index) ? "border-indigo-600" : "border-gray-300"} hover:bg-indigo-50`}
                >
                  <span className={`w-10 h-10 flex items-center justify-center font-bold rounded-full mr-4 transition-all ${openIndex.includes(index) ? "bg-indigo-500 text-white" : "bg-gray-300 text-gray-700"}`}>{index + 1}</span>
                  <p className="text-lg font-semibold text-gray-800 flex-1">{item.question}</p>
                  <span className="text-xl">{openIndex.includes(index) ? "🔼" : "🔽"}</span>
                </div>

                {openIndex.includes(index) && (
                  <div className="mt-2 p-4 bg-blue-50 border border-blue-300 rounded-md shadow-sm transition-all duration-300">
                    <h3 className="text-lg font-semibold text-blue-800">Answer:</h3>
                    <p className="text-gray-700 mt-2 whitespace-pre-line">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default InterviewVault;
