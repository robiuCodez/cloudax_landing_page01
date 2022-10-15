import { IEcoCard } from '@/src/interfaces'
import Image from 'next/image'

const EcoCard = ({ title, text, imageSrc}: IEcoCard) => {
  return (
    <div>
        <h5>{title}</h5>
        <p>{text}</p>
        <Image src={imageSrc} alt="image" width={300} height={300} />
    </div>
  )
}

export default EcoCard