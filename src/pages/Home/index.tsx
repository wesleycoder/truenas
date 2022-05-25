import { createSignal } from 'solid-js'

const defaultName = 'world'
const [name, setName] = createSignal(defaultName)

export default function Home() {
  return (
    <>
      <input
        type="text"
        placeholder="What's your name?"
        onInput={(e) => setName(e.currentTarget.value || defaultName)}
      />
      <p>Hello {name()}!</p>
      <button onClick={() => console.log('test')}>Test</button>
    </>
  )
}
