import ButtonComponent from './components/ButtonComponent'
import NavigationComponent from './components/NavigationComponent'
function App() {

  return (
    <>
      <NavigationComponent theme='light' />
      <section className='flex py-4 flex-col gap-1.5'>
        <ButtonComponent theme="orange" title="Get Started" />
        <ButtonComponent theme="blue" title="Get Started" />
        <ButtonComponent theme="purple" title="Get Started" />
      </section>
      <footer className='w-full bg-blue-900'>
        <NavigationComponent theme='dark' />
      </footer>
    </>
  )
}

export default App
