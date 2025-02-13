import React, { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'

const products = [
    {
        id: 1,
        name: 'EI-CXV / Боинг 737-800',
        imageSrc: '/image/airplanes/plane-1/plane1.jpg',
        imageDetail: '/image/airplanes/plane-1/ce1cc0ed96c5b39d95bb3f500fb8ae14.jpg',
    },
    {
        id: 2,
        name: 'JU1088 / Боинг 737-800',
        imageSrc: '/image/airplanes/plane-2/plane2.jpg',
        imageDetail: '/image/airplanes/plane-2/0b815c4c4bec5fceee64ce8aa32c8bf0.jpg',
    },
    {
        id: 3,
        name: 'JU1015 / Боинг 737-800',
        imageSrc: '/image/airplanes/plane-3/plane3.jpg',
        imageDetail: '/image/airplanes/plane-3/4a41a048773c35e79fd1ae099224401e.jpg',
    },
    {
        id: 4,
        name: 'EI-MNG / Боинг 737-MAX8',
        imageSrc: '/image/airplanes/plane-4/plane4.jpg',
        imageDetail: '/image/airplanes/plane-4/29cd7f57cab47d3acb101f3d021e869f.jpg',
    },
    {
        id: 5,
        name: 'JU1021 / Боинг 767-300ER',
        imageSrc: '/image/airplanes/plane-5/plane5.jpg',
        imageDetail: '/image/airplanes/plane-5/7d2d313bf023c58a8a3ae77677777837.jpg',
    },
    {
        id: 6,
        name: 'JU1109 / Боинг 757-222 Cargo',
        imageSrc: '/image/airplanes/plane-6/plane6.jpg',
        imageDetail: '/image/airplanes/plane-6/a24833f8f70495bc448dd8ab2d2da981.jpg',
    },
]

const Airplanes = ({ className }) => {
    const [open, setOpen] = useState(false)
    const [choosed, setChoosed] = useState({})

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <div className={`min-h-screen w-full mx-0 ${className}`}>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id} className="group relative rounded-lg"
                            onClick={() => {
                                setOpen(true)
                                setChoosed(product)
                            }}
                        >
                            <div className="relative hover:shadow-lg group-hover:cursor-pointer">
                                <img
                                    alt={product.name}
                                    src={product.imageSrc}
                                    className="transition-all aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover group-hover:scale-105"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 flex items-end p-4 opacity-100 group-hover:opacity-100"
                                >
                                    <div className="w-full rounded-md bg-white/50 px-4 py-2 text-center group-hover:bg-white/60 text-sm font-medium text-white-900 group-hover:backdrop-blur backdrop-filter">
                                        {product.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Dialog open={open} onClose={setOpen} className="relative z-30">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Dialog.Panel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div>
                                <img src={choosed.imageDetail} alt="" />
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Airplanes