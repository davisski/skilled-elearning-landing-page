import ContentComponent from './ContentComponent'
const CardComponent = ({title, description, headerClasses, icon}) => {
  return (
    <div className='relative bg-white max-w-88 shadow px-8 pt-16 pb-10 max-h-87.5 rounded-[15px] flex items-center justify-center'>
        <div className='absolute -top-6 left-8'>
            <img src={icon} alt={title} />
        </div>
        <ContentComponent title={title}
            description={description}
            headerClasses={headerClasses} />
    </div>
  )
}

export default CardComponent