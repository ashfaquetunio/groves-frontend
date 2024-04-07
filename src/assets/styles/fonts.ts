import { Inter, Playfair_Display } from 'next/font/google'

// define your variable fonts
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "700"]});
const playfair = Playfair_Display({ weight: ["400", "500", "600", "700"], subsets: ['latin'] })

export { playfair, inter }