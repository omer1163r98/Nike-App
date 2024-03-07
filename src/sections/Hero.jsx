import React, {useState} from 'react'
import Button from '../components/Button';
import { arrowRight } from '../../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../../assets/images';
import ShoeCard from '../components/ShoeCard';
const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
    return (
        <section id='home' className='w-full flex xl:flex-row flex-col gap-10 max-container justify-center min-h-screen'>
            <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-20'>
                <p className='text-xl font-montserrat text-coral-red'>Our Premium Collection</p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                    <br />
                    <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-9 mt-6 mb-14 sm:max-w-sm">Discover the latest arrivals, comfort, and design for your active life. </p>
                <Button label='Shop now' icon={arrowRight}></Button>
                <div className='flex flex-row justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((item, index) => (
                        <div key={index}>
                            <p className='text-4xl font-palanquin font-semibold'>{item.value}</p>
                            <p className='leading-7 font-montserrat text-slate-gray'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center items-center bg-primary min-h-screen w-full xl:min-h-screen max-xl:py-40 bg-cover bg-hero bg-center relative'>
                <img src={bigShoeImg} width={500} height={400} className='object-contain relative '/>
                <div className='flex sm:gap-6 gap-4 absolute top-[85%] '>
                {shoes.map((shoe) => (
                    <div key={shoe}>
                        <ShoeCard 
                        imgURL={shoe}
                        changeBigShoeImage = {(shoe) => setBigShoeImg(shoe)}
                        bigShoeImg = {bigShoeImg}
                        />
                    </div>
                ))
                }

            </div>
            </div>
            
            
        </section>
    )
}

export default Hero
