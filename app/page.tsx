import Image from 'next/image'
import Slider from './_components/Slider'
import Featured from './_components/Featured'
import Offer from './_components/Offer'

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
