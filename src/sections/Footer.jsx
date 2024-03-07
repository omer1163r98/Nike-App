import React from 'react'
import { footerLogo } from '../../assets/images'
import { facebook, instagram, twitter } from '../../assets/icons'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer>
     <div className='flex flex-row gap-10'>

        <div className='flex flex-col gap-5'>
          <img width={100} src={footerLogo}/>
          <p className='text-xs text-slate-gray w-[250px]'>Get shoes ready for the new term at your nearest Nike store. Get cash rewards, bonuses and discounts.</p>
          <div className='flex flex-row gap-6 items-center'>
            <img width={30} className='bg-white rounded-full p-2 flex' src={facebook}/>
            <img width={30} className='bg-white rounded-full p-2 flex' src={twitter}/>
            <img width={30} className='bg-white rounded-full p-2 flex' src={instagram}/>
          </div>
        </div>

        <div className='flex flex-row gap-36 ml-36'>
          {footerLinks.map((item) => (
            <div className='flex flex-col'>

            <h2 className='text-white font-semibold mb-10'>{item.title}</h2>
            <ul className='flex flex-col gap-1'>
              {item.links.map((link) => (
                <li className='text-slate-gray text-sm'>{link.name}</li>
              ))}
            </ul>

            </div>
          ))}
        </div>

      
    </div> 
    </footer>
  )
}

export default Footer
