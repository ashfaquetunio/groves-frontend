import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaCheck, FaChevronDown } from 'react-icons/fa'
import { countries } from '@/assets/data'



const Select = () => {
    const [selected, setSelected] = useState(countries[0])

    return (
        <div >
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative z-30 text-white">
                    <Listbox.Button className="relative text-lg w-full lg:min-w-[120px] cursor-pointer flex justify-between items-center gap-1 lg:gap-2 rounded-lg  py-2 text-left sm:text-sm">
                        <span className="pointer-events-none flex items-center">
                            <FaChevronDown
                                className="h-3 lg:h-4 aspect-square opacity-75"
                                aria-hidden="true"
                            />
                        </span>
                        <span className='text-2xl mr-1 rounded-lg overflow-hidden'>
                            <span className={"fi fi-" + selected.code}></span>
                        </span>
                        <span className="capitalize text-sm lg:text-base">{selected.language}</span>

                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="min-w-[120px] absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {countries.map((country, idx) => (
                                <Listbox.Option
                                    key={idx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={country}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block capitalize text-xs sm:text-sm lg:text-base ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {country.language}
                                            </span>
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <span className={"fi fi-" + country.code}></span>
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}


export default Select