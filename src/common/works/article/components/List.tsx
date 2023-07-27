import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";

export default function List({ data }: any) {
  return (
    <div className="mx-auto max-w-4xl px-12">
      <ul role="list" className="py-10 max-w-xl space-y-8 text-gray-600">
        {data.elements.map((element: any) => (
          <>
            <li className="flex gap-x-3">
              <ChevronDoubleRightIcon
                className="mt-1 h-5 w-5 flex-none text-variation"
                aria-hidden="true"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  {element.title}
                </strong>{" "}
                {element.content}
              </span>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
