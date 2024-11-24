import Header from "./components/Header"
import { ways } from "./data"
import WayToTeach from "./components/WayToTeach"
import Button from "./components/Button/Button"
export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3> Way to teach </h3>
          <ul>
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
        <section>
          <h3>
            How are we different from other?</h3>
          <Button />
          <Button />
          <Button />
          <Button />
        </section>
      </main>
    </div>
  )
}
