import ButtonComponent from './components/ButtonComponent'
function App() {

  return (
    <>
      <section className='flex py-4 flex-col gap-1.5'>
        <ButtonComponent theme="orange" title="Get Started" />
        <ButtonComponent theme="blue" title="Get Started" />
        <ButtonComponent theme="purple" title="Get Started" />
      </section>
    </>
  )
}

export default App
