export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>
          <span aria-hidden="true">🐱</span> 춤추는 고양이
        </h1>
        <p>고양이와 함께 리듬을 타 보세요!</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">Made with React &amp; CSS keyframes</footer>
    </div>
  )
}
