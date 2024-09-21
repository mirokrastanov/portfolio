import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse',
        }
    },
});

const TechIcon = ({ Icon, color, title, duration }) => {

    return (
        <motion.div
            className='rounded-2xl border-4 border-neutral-800 p-4' title={title}
            variants={iconVariants(duration)} initial={'initial'} animate={'animate'}
        >
            <Icon className={`text-7xl rounded-xl ${color}`} />
        </motion.div>
    )
}

export default TechIcon;