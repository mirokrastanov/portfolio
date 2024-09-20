const TechIcon = ({ Icon, color, title }) => {
    return (
        <div className='rounded-2xl border-4 border-neutral-800 p-4' title={title}>
            <Icon className={`text-7xl rounded-xl ${color}`} />
        </div>
    )
}

export default TechIcon;