import './MainContent.css';

function MainContent() {
  return (
    <main className="container">
      <h1 className="main__title">Fun Facts About React</h1>
      <ul className="main__facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

export default MainContent;