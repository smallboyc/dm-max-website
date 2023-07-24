"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Home from "./Home";
import Breadcrumb from "@/common/elements/Breadcrumb";
import Features from "@/common/works/Features";
import UserLink from "./UserLink";
import Logo from "../elements/Logo";
export default function WorksNavigation({ locale, children, data }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(data);
  const domains_data = data[0].attributes.domains.data;
  const types_data = data[1].attributes.types.data;
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <Logo works />
                    </div>
                    <Home locale={locale} />
                    <div className="text-xs font-semibold leading-6 text-variation">
                      {data[0].attributes.title}
                    </div>
                    <Features locale={locale} data={domains_data} />
                    <div className="text-xs font-semibold leading-6 text-variation">
                      {data[1].attributes.title}
                    </div>
                    <Features locale={locale} data={types_data} />
                    <UserLink username="Maxence Dupuis" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <Logo works />
            </div>
            <Home locale={locale} />
            <div className="text-xs font-semibold leading-6 text-variation mt-2">
              {data[0].attributes.title}
            </div>
            <Features locale={locale} data={domains_data} />
            <div className="text-xs font-semibold leading-6 text-variation mt-2">
              {data[1].attributes.title}
            </div>
            <Features locale={locale} data={types_data} />
            <UserLink username="Maxence Dupuis" />
          </div>
        </div>

        <div className="sticky top-0 z-50 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            <Logo works />
          </div>
          <UserLink />
        </div>

        <main className="lg:pl-72">
          <Breadcrumb />
          <div className="px-4 sm:px-6 lg:px-8 py-20">{children}</div>
        </main>
      </div>
    </>
  );
}
