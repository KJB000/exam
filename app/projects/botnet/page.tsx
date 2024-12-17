'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

const code = `# Botnet 개발 예시 코드
# 이 코드는 간단한 봇넷 제어 시뮬레이션을 보여줍니다.

# 봇넷 시작 함수
def start_botnet():
    print("Starting botnet...")

    # 제어할 봇들의 리스트
    bots = ["bot1", "bot2", "bot3", "bot4", "bot5"]

    # 각 봇에 명령 전송
    for bot in bots:
        control_bot(bot)

    # 봇넷 종료
    print("Botnet shutting down.")

# 특정 봇을 제어하는 함수
def control_bot(bot_name):
    print(f"Sending command to {bot_name}")
    # 실제 명령을 봇에 전송하는 코드는 보안 연구 목적으로 생략
    print(f"{bot_name} has received the command.")

# 봇넷 실행
if __name__ == "__main__":
    start_botnet()`

export default function BotnetPage() {
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
        <h1 className="text-3xl mb-8">Botnet Development Example Code</h1>
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
