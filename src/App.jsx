import React, { useEffect, useState } from "react"; 
import './App.css'

const HeroSection = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserList(data.slice(0, 6))) // Faqat 6 ta foydalanuvchini olish
      .catch((error) => console.error("Foydalanuvchilarni olishda xatolik:", error));
  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-75"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-4 text-white border-b border-white/20">
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <div className="bg-white p-1 text-blue-900 rounded">Q</div>
          <span>uintela</span>
        </div>
        <nav className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">О компании</a>
          <a href="#" className="hover:underline">Деятельность</a>
          <a href="#" className="hover:underline">Персонал</a>
          <a href="#" className="hover:underline">Клиенту</a>
          <a href="#" className="hover:underline">Акционеру и инвестору</a>
          <a href="#" className="hover:underline">Пресс-центр</a>
          <a href="#" className="hover:underline">Торги</a>
          <a href="#" className="hover:underline">Контакты</a>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 text-white">
        {/* Title and Text */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold leading-tight">
            Quis et quam quam sem scelerisque odio.
          </h1>
          <p className="mt-4 text-lg">
            Diam hendrerit purus dui nisl scelerisque in pharetra molestie. Nunc leo.
          </p>
          <button className="mt-6 px-6 py-2 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900">
            Подробнее
          </button>
          <div className="flex justify-center space-x-2 mt-6">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-gray-400"></div>
            <div className="w-6 h-1 bg-gray-400"></div>
          </div>
        </div>

        {/* Percentage Circle */}
        <div className="mt-12 flex flex-col items-center">
          <div className="relative w-40 h-40 border-4 border-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold">99,995%</span>
          </div>
          <p className="mt-4 text-sm text-center max-w-xs">
            Nisi nulla ultrices amet cras tincidunt nec. Dolor magna.
          </p>
        </div>
      </div>

      {/* Users List */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 text-white">
        <div className="grid grid-cols-3 gap-4 max-w-4xl w-full">
          {userList.map((user, index) => (
            <div key={user.id} className={`p-6 border ${index === 0 ? 'bg-blue-900 text-white' : 'bg-white text-blue-900'} rounded-lg shadow-md relative`}>
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p className="text-sm">{user.email}</p>
              <span className="text-4xl font-bold opacity-50 absolute top-2 right-4">{String(index + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

