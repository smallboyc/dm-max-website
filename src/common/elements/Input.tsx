import { ErrorMessage, Field } from "formik";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  component?: string;
  rows?: number;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  component,
  rows,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {name}*
      </label>
      <div className="mt-2.5">
        <Field
          name={label}
          type={type}
          component={component}
          rows={rows}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-variation sm:text-sm sm:leading-6"
        />
      </div>
      <ErrorMessage
        name={label}
        render={(msg: any) => (
          <div className="text-red-700 text-xs ml-2 mt-2">{msg}</div>
        )}
      />
    </div>
  );
};

export default Input;
