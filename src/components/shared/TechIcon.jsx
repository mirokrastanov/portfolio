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

const TechIcon = ({ Icon, color, title, duration, delay }) => {

    return (
        <motion.section
            className='flex flex-wrap items-center justify-center gap-x-4 gap-y-6'
            whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5, delay, }}>

            <motion.div
                className='rounded-2xl border-4 border-neutral-800 p-4' title={title}
                variants={iconVariants(duration)} initial={'initial'} animate={'animate'}
            >

                <Icon className={`text-7xl rounded-xl ${color}`} />

            </motion.div>

        </motion.section>
    )
}

export default TechIcon;
