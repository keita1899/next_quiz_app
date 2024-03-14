import Link from "next/link"
import React from "react"

export const Header: React.FC = () => {
  
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/signup'>ユーザー登録</Link>
          </li>
          <li>
            <Link href='/login'>ログイン</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}