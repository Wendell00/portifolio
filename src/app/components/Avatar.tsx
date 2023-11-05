import Image from 'next/image'
import { motion } from 'framer-motion'

const Avatar = ({
  className = 'relative flex',
  initial = { x: 100, opacity: 0 },
  animate = { x: 0, opacity: 1 },
  transition = { type: 'spring', stiffness: 30, delay: 1 },
  width = 'w-1/2 md:w-1/3 lg:w-2/3',
  height = 'h-1/2 md:w-1/3 lg:h-2/3',
  shadow = 'shadow-2xl',
}) => (
  <motion.div
    className={className}
    initial={initial}
    animate={animate}
    transition={transition}>
    <Image
      src={`/me.webp`}
      priority
      loading='eager'
      alt='Imagem do Wendell Borges'
      width={400}
      height={400}
      className={`mx-auto ${height} ${width} rounded-[35%] object-cover ${shadow}`}
    />
    <div
      className={`absolute inset-0 mx-auto h-full ${width} rounded-[35%] bg-[#c1deee] opacity-25 dark:bg-gradient-to-r dark:from-[#c1deee] dark:to-[#fff] dark:opacity-[20%]`}></div>
  </motion.div>
)

export default Avatar
