import Image from 'next/image'
import { Inter } from 'next/font/google';
import { Metadata} from 'next'; 
import  LargeHeading  from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/paragraph';
import Link from 'next/link';


const author = {
  URL:'https://github.com/kiritocode1', 
  name: "Aryan Kathawale || kiritocode1"
}


export const metadata : Metadata= {
  title: "similarity API | Home", 
  description: 'FOSS text similarity api ', 
  authors:author
} 


export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 m-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading size={'lg'} className='three-d text-black  dark:text-light-gold'>
            Quickly  Determine <br/> text similarity , for nerds .
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            with  the text similarity api , you can easily determine the similarity between two pieces of text with a free  {" "} 
            <Link href={'/login'} className="underline underline-offset-2 text-black dark:text-light-gold">
              API Key 
            </Link>
            .
          </Paragraph>

          <div className='relative w-full max-w-lg lg:max-w-3xl  lg:left-1/2 aspect-square lg:absolute '>
            <Image priority className='img-shadow' quality={100} style={{ objectFit: 'contain' }}
              fill 
              src="/typewriter.png"
              alt='typewriter image'
            />
          </div>
        </div>
      </div>
    </div>
  )
};
