'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function ProfilePage() {
  const router = useRouter()

  const handleLogout = () => {
    document.cookie =
      'isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
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

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 프로필 헤더 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex flex-col items-center">
              <Image
                src="/photo.jpg"
                alt="Profile Picture"
                width={180}
                height={180}
                className="rounded-full shadow-lg mb-6 object-cover"
              />
              <h1 className="text-3xl font-bold mb-2">이시훈</h1>
              <p className="text-gray-600 text-lg mb-4">
                Ethical Hacking Specialist | Red Team
              </p>
              <p className="text-blue-600 font-medium">
                중부대학교 정보보호학과
              </p>
            </div>
          </div>

          {/* 기술 스택 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  Programming
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: '90%' }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Python</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">C/C++</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      JavaScript
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  Security
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Penetration Testing</li>
                  <li>• Malware Analysis</li>
                  <li>• Network Security</li>
                  <li>• Web Security</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Wireshark</li>
                  <li>• Burp Suite</li>
                  <li>• Metasploit</li>
                  <li>• IDA Pro</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 소셜 링크 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Connect with Me</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://midterm2-eosin.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
              >
                <Image
                  src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
                  alt="Vercel Logo"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <span>Vercel</span>
              </a>

              <a
                href="https://github.com/KJB000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 rounded-lg bg-white text-black border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub Logo"
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4 text-center text-gray-600">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
