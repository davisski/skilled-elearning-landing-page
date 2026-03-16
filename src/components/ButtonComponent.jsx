const ButtonComponent = ({theme, title}) => {
    const themes = {
        'orange': 'bg-[image:var(--gradient-orange)] text-white hover:opacity-50',
        'blue': 'bg-blue-900 hover:bg-blue-600 text-white',
        'purple': 'bg-[image:var(--gradient-purple)] text-white hover:opacity-50'
    }

    return (
        <div className={`${themes[theme]} min-w-35 w-full min-h-12 h-full cursor-pointer max-w-42 max-h-14.75 px-8 py-4 rounded-full text-[18px] font-bold`}>
        {title}
        </div>
    )
}

export default ButtonComponent