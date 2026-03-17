import ButtonComponent from './components/ButtonComponent'
import NavigationComponent from './components/NavigationComponent'
import ContentComponent from './components/ContentComponent'
function App() {

  return (
    <>
      <NavigationComponent theme='light' />
      <section className='flex py-4 flex-col gap-1.5'>
        <ButtonComponent theme="orange" title="Get Started" />
        <ButtonComponent theme="blue" title="Get Started" />
        <ButtonComponent theme="purple" title="Get Started" />
      </section>
      <div className='max-w-114.25'>
        <ContentComponent title="Maximize skill, minimize budget"
        description="Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want."
        headerClasses="text-[56px]" />
      </div>

      <div className='grid'>
        <ContentComponent title="Animation"
        description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
        headerClasses="text-[24px]" />

        <ContentComponent title="Design"
        description="Create beautiful, usable interfaces to help shape the future of how the web looks."
        headerClasses="text-[24px]" />

        <ContentComponent title="Photography"
        description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        headerClasses="text-[24px]" />

        <ContentComponent title="Crypto"
        description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
        headerClasses="text-[24px]" />

        <ContentComponent title="Business"
        description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        headerClasses="text-[24px]" />

      </div>
      <footer className='w-full bg-blue-900'>
        <NavigationComponent theme='dark' />
      </footer>
    </>
  )
}

export default App
