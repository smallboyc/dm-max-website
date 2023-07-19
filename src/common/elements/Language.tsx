"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FR } from "country-flag-icons/react/3x2";
import { US } from "country-flag-icons/react/3x2";
import classNames from "classnames";
import { useRouter } from "next/navigation";

const languages = ["fr", "en"];

export default function Language({ locale }: { locale: string }) {
  const [selected, setSelected] = useState(locale);
  const router = useRouter();
  const redirection = (value: string) => {
    setSelected(value);
    router.replace(`/${value}`, { scroll: false });
  };
  return (
    <Listbox value={selected} onChange={redirection}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative flex items-center gap-2 w-full cursor-default rounded-md bg-white py-1.5 px-2 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-variation/90 sm:text-sm sm:leading-6">
              {selected == "fr" ? (
                <FR title="fr" className="rounded-sm w-6 h-auto" />
              ) : (
                <US title="en" className="rounded-sm w-6 h-auto" />
              )}
              <span className="block truncate">{selected.toUpperCase()}</span>
              <span className="pointer-events-none  flex items-center">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages.map((language) => (
                  <Listbox.Option
                    key={language}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-variation/90 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 flex items-center gap-2 px-2"
                      )
                    }
                    value={language}
                  >
                    {({ selected, active }) => (
                      <>
                        {language == "fr" ? (
                          <FR title="fr" className="rounded-sm w-6 h-auto" />
                        ) : (
                          <US title="en" className="rounded-sm w-6 h-auto" />
                        )}

                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {language.toUpperCase()}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-variation/90",
                              "flex items-center"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
