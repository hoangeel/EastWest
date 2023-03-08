"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { HiMenu } from 'react-icons/hi';
import logo from "../../assets/imgs/logo.png"

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation = [
  { name: 'Contact us on WhatsApp', href: '#', current: true },
  { name: 'APPLY FOR TRAINING', href: '/apply', current: false },
  { name: 'Trainings', href: '/teaching-standards', current: false },
  { name: 'About Us', href: '/about', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const router = useRouter()
  
  return (
    <>
      <div className="bg-none absolute top-[0px] w-[100%] z-50">
        <div className="max-lg:px-[26px] flex flex-row container px-[40px] mx-auto max-w-[1920px] mt-[20px] " >
          <Image onClick={() => router.push("./")} className="max-lg:ml-[0px] max-lg:h-[17px] max-lg:w-[100px] w-[162px] h-[28px] mr-auto mt-[13px] ml-[14px] hover:cursor-pointer hover:opacity-70" src={logo} alt=""/>
          <button className="font-[700] text-[19px] leading-[29px] text-[#FFFFFF] hover:cursor-pointer hover:opacity-70 max-lg:hidden">Contact us on WhatsApp</button>
          <button className="bg-[#E7D0AD] w-[236px] h-[54px] font-[400] text-[19px] leading-[29px] text-[#FFFFFF] ml-[72px] hover:cursor-pointer hover:opacity-70 max-lg:hidden" onClick={() => router.push("./apply")}>APPLY FOR TRAINING</button>
        </div>
        <Disclosure >
        {({ open }) => (
          <>
            <div>
                <div className="lg:hidden text-right pr-[15px] mt-[-30px]">
                  <Disclosure.Button className=" w-[48px] h-[48px] p-[17px] bg-white hover:cursor-pointer hover:opacity-70">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="w-[15px] h-auto" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="w-[15px] h-auto" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden text-right pr-[15px] bg-black ">
              <div className="">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
        </Disclosure>
        <hr className="max-lg:mt-[13px] w-[100%] h-[1px] my-[27px] bg-[#FFFFFF] "/>
        <div className="flex flex-row container px-[40px] mx-auto max-w-[1920px] mt-[20px] max-lg:hidden">
          <button onClick={() => router.push('./teaching-standards')} className="ml-auto font-[700] text-[22px] leading-[29px] text-[#FFFFFF] w-[195px] hover:cursor-pointer hover:opacity-70">Trainings</button>
          <button className="max-xl:mr-0 font-[700] text-[22px] leading-[29px] text-[#FFFFFF] w-[195px] ml-[55px] mr-[229px] hover:cursor-pointer hover:opacity-70" onClick={() => router.push("./about")}>ABOUT US</button>
        </div>
      </div>
    </>
  )
}

