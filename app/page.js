import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  let name = 'Choi'

  let link = 'https://naver.com'
  return (
    <div>
      <h4> 안녕</h4>
      <p>by seoyoon {name}</p>
      {name}
      <p>{}중괄호를 사용하면 자바스크립트 변수 사용가능한것은 데이터 바인딩</p>
      <a href="/list">네이버</a>
    </div>
  )
}
