import Link from "next/link"

const Header = () => {
  return (
    <header>
        <nav className="flex gap-2 justify-center capitalize my-3">
        <Link href="/about">about</Link>
        <Link href="/about/contact">Contact</Link>
        <Link href="/shop">shop</Link>
        <Link href="/blog">blog</Link>
        </nav>
    </header>
  )
}

export default Header