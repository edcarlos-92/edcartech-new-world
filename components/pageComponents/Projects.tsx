import React, { useEffect, useState } from 'react'


export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalSrc, setModalSrc] = useState<string | null>(null)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
        setModalSrc(null)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  function openModal(src: string) {
    setModalSrc(src)
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
    setModalSrc(null)
  }
  return (
    <div>



      {/* <!-- Live Projects --> */}
      <div className="relative pt-5">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 text-xl font-bold text-green-700 pt-5"> Early Projects ( 2016 - 2019 )  </span>
          <br />
          <br />
          <span className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300 pt-4">
            Please Follow my newer works on <a className="underline hover:text-green-700" href="https://github.com/edcarlos-92" target="_blank" rel="noreferrer">GitHub</a>.
          </span>

        </div>



      </div>

      {/* <!-- Live Projects --> */}

      {/* Old Projects */}
      <div className="p-10 ">
        <ul role="list" className="grid gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-10">

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/AMS.png')} src="/assets/images/projects/AMS.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">ARCHIVE MANAGEMENT SYSTEM</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For managing document location ( PHP, WordPress + MySQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/CHMS.png')} src="/assets/images/projects/CHMS.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">CHURCH MANAGEMENT SYSTEM</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For managing church operation ( VB.NET + MSSQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/EDSMSMESSAGES.png')} src="/assets/images/projects/EDSMSMESSAGES.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">SIMPLE MESSAGE SERVICES</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For sending single & bulk sms ( C#.Net, SQLite )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/EKBFOLDERMGM.png')} src="/assets/images/projects/EKBFOLDERMGM.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">FILE MANAGEMENT SYSTEM</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For managing and orginizing files & folders( C#.Net, MySQL )</p>
            </li>
            {/* </a> */}
          </>


          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/FMS.png')} src="/assets/images/projects/FMS.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">FILLING STATION MANAGEMENT</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For daily sales records ( PHP, WordPress + MySQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/MMUMOTION.png')} src="/assets/images/projects/MMUMOTION.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">HEAVY DUTY VEHICLE MOVEMENTS</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For mining vehicle engine hours( PHP, WordPress + MySQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/GRA.png')} src="/assets/images/projects/GRA.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">REVENUE AUDIT RECORDS & REPORTS</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For revenue autority agency ( PHP, WordPress + MySQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/POS.png')} src="/assets/images/projects/POS.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">POINT OF SALE SYSTEM</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For managing sales in a shop (C#.Net, SQLite)</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/Safety-Performance.png')} src="/assets/images/projects/Safety-Performance.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">WEEKLY SAFETY PERFORMANCE DISPLAY</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For reception post large scrren display ( HTML, CSS, JavaScript )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/SMSV1.jfif')} src="/assets/images/projects/SMSV1.jfif" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">SCHOOL MANAGEMENT V.1.00</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For kg, primary,jhs & senior high (VB.Net, MSSQL)</p>
            </li>
            {/* </a> */}
          </>


          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/SMSV3.png')} src="/assets/images/projects/SMSV3.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">SCHOOL MANAGEMENT V.3.00</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For kg, primary,jhs & senior high (C#.Net, MySQL)</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/SMSWEB.png')} src="/assets/images/projects/SMSWEB.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">SCHOOL MANAGEMENT V.2.00</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For kg, primary,jhs & senior high (PHP, WordPress + MySQL)</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/SMT.png')} src="/assets/images/projects/SMT.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">TRANSPORT SYSTEM MANAGEMENT</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For customers goods & packages (C#.Net, MySQL)</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/SVL.png')} src="/assets/images/projects/SVL.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">SAVING & LOANS</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For managing past book & loan packages ( PHP, WordPress + MySQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/VotingSystem.png')} src="/assets/images/projects/VotingSystem.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">VOTING SYSTEM</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For local bodies elections & voting ( PHP, WordPress + MySQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/WEBHMS.png')} src="/assets/images/projects/WEBHMS.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">HOSPITAL MANAGEMENT SYSTEM</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For local clinics & hospitals ( PHP, WordPress + MySQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/GhlottoArena.png')} src="/assets/images/projects/GhlottoArena.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">LOTTERY WEBSITE</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For publishing & sending lotto results ( WordPress + MySQL )</p>
            </li>
            {/* </a> */}
          </>

          <>
            <li className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img onClick={() => openModal('/assets/images/projects/Hero.png')} src="/assets/images/projects/Hero.png" alt="" className="object-cover cursor-zoom-in projectImg" />
              </div>
              <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">E-COMMERCE WEBSITE</p>
              <p className="block text-xs font-small  pointer-events-none text-center">For bowties & hand made craft online shop</p>
            </li>
            {/* </a> */}
          </>

          <li className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img onClick={() => openModal('/assets/images/projects/MyEduAid.png')} src="/assets/images/projects/MyEduAid.png" alt="" className="object-cover cursor-zoom-in projectImg" />
            </div>
            <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">NGO WEBSITE</p>
            <p className="block text-xs font-small  pointer-events-none text-center">For supporting less priviledged school going children ( WordPress + MySQL )</p>
          </li>
          {/* </a> */}

          <li className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img onClick={() => openModal('/assets/images/projects/afro-shoemaker.png')} src="/assets/images/projects/afro-shoemaker.png" alt="" className="object-cover cursor-zoom-in projectImg" />
            </div>
            <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">E-CORMERCE WEBSITE</p>
            <p className="block text-xs font-small  pointer-events-none text-center">For hand made local shoes, belts, setc... ( WordPress + MySQL )</p>
          </li>
          {/* </a> */}

          <li className="relative">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img onClick={() => openModal('/assets/images/projects/X-SchoolGh.png')} src="/assets/images/projects/X-SchoolGh.png" alt="" className="object-cover cursor-zoom-in projectImg" />
            </div>
            <p className="mt-2 block text-sm font-medium  truncate pointer-events-none text-center">E-LEARNING PLATFORM</p>
            <p className="block text-xs font-small  pointer-events-none text-center">For KG,PRIMARY &Junior High Learners (WordPress + MySQL )</p>
          </li>
          {/* </a> */}


        </ul>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div onClick={closeModal} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button aria-label="Close" className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>×</button>
          {modalSrc && (
            <img src={modalSrc} alt="preview" className="max-h-[85vh] max-w-[90vw] rounded shadow-lg" />
          )}
        </div>
      )}
    </div>
  )
}
