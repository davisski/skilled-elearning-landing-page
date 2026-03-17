const ContentComponent = ({title, description, headerClasses}) => {
  return (
    <div className="flex flex-col justify-start gap-6">
        <h1 className={`${headerClasses} text-blue-900 font-extrabold leading-[120%] text-left`}>{title}</h1>
        <p className="font-medium text-grey text-left">{description}</p>
    </div>
  )
}

export default ContentComponent