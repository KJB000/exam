'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

const code = `# USB 원격 액세스 예시 코드
# 이 코드는 USB 장치를 통해 원격으로 시스템에 접근하는 시뮬레이션을 보여줍니다.

import os

# USB 원격 액세스 기능
def remote_access():
    print("Attempting to gain remote access via USB device...")

    # USB 장치가 연결되어 있는지 확인
    if os.path.exists("/media/usb_device"):
        print("USB device found. Initiating remote access...")
        # 실제로 USB 공격 벡터를 통해 시스템을 제어하는 코드는 생략
        perform_exploit()
    else:
        print("No USB device detected. Access attempt failed.")

# USB 장치를 통한 원격 액세스 수행 함수
def perform_exploit():
    print("Performing exploit on target system via USB...")
    # 실제 악성 코드 실행은 보안 연구 목적으로 생략
    print("Exploit successful. System compromised.")

# 원격 액세스 실행
if __name__ == "__main__":
    remote_access()`

export default function UsbPage() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <nav>
          <Link href="/projects">Back to Projects</Link>
        </nav>
      </header>

      <section className="container mx-auto p-5">
        <h1 className="text-3xl mb-8">USB Remote Access Example Code</h1>
        <pre>
          <code className="language-python">{code}</code>
        </pre>
      </section>

      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  )
}
