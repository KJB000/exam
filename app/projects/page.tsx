'use client'

import Link from 'next/link'

export default function ProjectsPage() {
  const handleLogout = () => {
    document.cookie =
      'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link
                href="/profile"
                className="text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/projects"
                className="text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <section className="container mx-auto p-5">
        <h1 className="text-3xl mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Security
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                  Network
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Project 1: Botnet Development
              </h3>
              <p className="text-gray-600 mb-4">
                이 프로젝트는 네트워크 제어 실험을 위해 봇넷을 구축하고 관리하는
                데 중점을 둡니다...
              </p>
              <Link
                href="/projects/botnet"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Example Code
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Hardware
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                  Security
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Project 2: USB Remote Access
              </h3>
              <p className="text-gray-600 mb-4">
                이 프로젝트는 USB 장치를 사용하여 타겟 시스템에 원격으로
                액세스하는 방법에 중점을 둡니다...
              </p>
              <Link
                href="/projects/usb"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Example Code
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Security
                </span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                  Research
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Project 3: Malware Development
              </h3>
              <p className="text-gray-600 mb-4">
                이 프로젝트는 보안 연구 목적으로 악성 코드를 개발하는 데 중점을
                둡니다...
              </p>
              <Link
                href="/projects/malware"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Example Code
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Database
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                  Next.js
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Project 4: CRUD Application
              </h3>
              <p className="text-gray-600 mb-4">
                데이터베이스의 기본 작업인 Create, Read, Update, Delete 기능을
                구현한 웹 애플리케이션 프로젝트입니다.
              </p>
              <a
                href="https://crud-pied-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  HTML
                </span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                  CSS
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                  JavaScript
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Project 5: HCJ Demo</h3>
              <p className="text-gray-600 mb-4">
                HTML, CSS, JavaScript를 활용한 웹 프론트엔드 데모 프로젝트로,
                다양한 웹 기술을 실험하고 구현했습니다.
              </p>
              <a
                href="https://hcjdemo-2024-2-kappa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  HTML
                </span>
                <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                  UI/UX
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Project 6: HTML Drawing
              </h3>
              <p className="text-gray-600 mb-4">
                HTML과 CSS를 활용하여 다양한 그래픽 요소와 시각적 효과를 구현한
                창의적인 웹 디자인 프로젝트입니다.
              </p>
              <a
                href="https://ui-alpha-taupe.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-5 bg-white border-t border-[#dbdbdb] w-full mt-auto">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  )
}
