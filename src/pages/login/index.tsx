import * as React from "react";
import Image from "next/image";
import OutlineInput from "@/components/outline-input";

const Login: React.FC = () => {
  const initialFormState = {
    email: "",
    password: "",
  };
  const [formState, setFormState] = React.useState<{
    email: string;
    password: string;
  }>(initialFormState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((val) => ({
      ...val,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex-[0.7] h-full flex flex-col justify-start items-center">
        <div className="h-16 w-full p-3 flex flex-row justify-between items-center">
          <Image src="/logo.svg" alt="Rakuten Logo" height={100} width={100} />
          <a
            href="https://global.rakuten.com/corp/"
            target="_blank"
            className="text-blue-600"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col h-full w-full justify-start items-center">
          <div className="flex flex-col gap-4 w-full h-auto items-center mt-[30%]">
            <span className="text-3xl font-bold">Sign In</span>
            <span className="text-xl pb-20">
              Enter your details to continue.
            </span>
            <form className="flex flex-col gap-8 w-[60%]" onSubmit={submit}>
              <OutlineInput
                name="email"
                value={formState.email}
                placeholder="Email"
                onChange={onChange}
              />
              <OutlineInput
                name="password"
                value={formState.password}
                placeholder="Password"
                onChange={onChange}
              />
              <button
                type="submit"
                className="mt-10 bg-blue-400 rounded-md text-white flex justify-center items-center h-12 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full relative md:flex hidden">
        <video autoPlay loop muted className="object-cover h-full w-full">
          <source src="/videos/masthead-bg.mp4" type="video/mp4; codecs=hvc1" />
          <source
            src="/videos/masthead-bg.webm"
            type="video/webm; codecs=vp9"
          />
        </video>
        <Image
          className="absolute top-[50%] left-[45%]"
          src="/logo.svg"
          alt="Rakuten logo"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Login;
