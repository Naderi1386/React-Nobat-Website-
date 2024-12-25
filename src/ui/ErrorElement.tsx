import { useRouteError } from "react-router-dom";

interface ErrorType {
  message: string;
  data: string;
}

const ErrorElement = () => {
  const error = useRouteError() as ErrorType;
  return (
    <div className="flex justify-center items-center w-[100%] h-screen">
      <h1 className="text-4xl text-red-500 font-semibold">
        {error.message ? error.message : error.data}
      </h1>
    </div>
  );
};

export default ErrorElement;
