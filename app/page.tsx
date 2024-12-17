'use client'

export default function LoginPage() {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const studentId = (document.getElementById('studentId') as HTMLInputElement)
      .value
    const dob = (document.getElementById('dob') as HTMLInputElement).value

    if (studentId === '92212984' && dob === '20030524') {
      document.cookie = 'isLoggedIn=true; path=/'
      window.location.href = '/profile'
    } else {
      alert('학번 또는 생년월일이 일치하지 않습니다.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white py-5 text-center border-b border-[#dbdbdb]">
        <h1 className="text-2xl font-bold">포트폴리오 저장소</h1>
      </header>

      <main className="flex-grow flex justify-center items-center p-10">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow"
        >
          <div className="mb-4">
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="학번"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="dob"
              name="dob"
              placeholder="생년월일 (YYYYMMDD)"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            로그인
          </button>
        </form>
      </main>

      <footer className="text-center py-5 bg-white border-t border-[#dbdbdb] w-full">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  )
}
