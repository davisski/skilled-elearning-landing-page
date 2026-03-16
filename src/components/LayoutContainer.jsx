export const LayoutContainer = ({children, additionalClasses}) => {
  return (
    <div className={`sm:max-w-280 mx-auto w-full ${additionalClasses}`}>
      {children}
    </div>
  )
}
