'use client';

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function DropdownSelect({ data, onDataChange, showIcon }) {
    const [selected, setSelected] = useState(data[0]);

    const handleChange = (item) => {
        setSelected(item);
        onDataChange(item);
    };

    return (
        <Listbox value={selected} onChange={handleChange}>
            <div className="relative">
                <ListboxButton className="min-w-40 grid cursor-default grid-cols-1 rounded-md bg-[var(--color-bg-main)] border border-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-300 sm:text-sm/6">
                    <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6 text-white">
                        {showIcon && <span className={`${selected.name.toLowerCase()} font-extrabold text-xl`}>A</span>}
                        <span className="block truncate">{selected.name}</span>
                    </span>
                    <ChevronUpDownIcon aria-hidden="true" className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="min-w-40 absolute z-10 mt-1 max-h-56 overflow-auto rounded-md bg-zinc-900 border border-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
                >
                    {data.map((item) => (
                        <ListboxOption
                            key={item.id}
                            value={item}
                            className="group relative cursor-default py-2 pr-9 pl-3 text-white-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
                        >
                            <div className="flex items-center">
                                {showIcon && <span className={`${item.name.toLowerCase()} font-extrabold text-xl`}>A</span>}
                                <span className="min-w-lg ml-3 block truncate font-normal group-data-selected:font-semibold">{item.name}</span>
                            </div>

                            {item.id === selected.id && (
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-300 group-not-data-selected:hidden group-data-focus:text-white">
                                    <CheckIcon aria-hidden="true" className="size-5" />
                                </span>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
}
