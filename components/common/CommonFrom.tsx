'use client'
import React from "react";
import { useRouter } from "next/navigation";
import {motion} from "motion/react"

type fromType = {
  title: string;
  css?: string;
  subtitle?: string;
  titlecss?: string;
  fromtitlecss?:string
};
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Name is required"),
  phone: z
    .string()
    .min(10, "Number is required")
    .regex(/^[0-9]+$/, "Number must be digits only"),
  email: z.string().email("Invalid email address"),
  requirements: z.string().nullish(),
});

type FormInputs = z.infer<typeof schema>;

function CommonFrom({ title, css, subtitle, titlecss ,fromtitlecss }: fromType) {
  const route=useRouter()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormInputs> = async () => {
    reset()
    route.push("/thank-you")
  };

  return (
    <motion.form
    initial={{ transform: "translateX(100px)", opacity:0 ,pathLength:0  }}
    animate={{ transform: "translateX(0px)" , opacity:1 ,pathLength:1 }}
    transition={{ type: "spring", ease:"easeOut", duration:2 }}
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className={`w-full relative h-full flex  flex-col  p-5 2xl:p-[30px] self-center justify-self-center md:max-w-[500px] 2xl:max-w-[400px] rounded-md items-start ${
        css ? css : "bg-white"
      } gap-3`}
    >
      <div className="w-full relative h-auto flex flex-col gap-2">
        <h2
          className={`text-p22 font-medium  ${
            fromtitlecss ? fromtitlecss : "text-webaccent"
          } `}
        >
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-p32 font-medium text-webaccent border-b-2 border-webaccent">
            {subtitle}
          </h3>
        )}
      </div>
      <span className="w-full relative flex flex-col   ">
        <label
          htmlFor="name"
          className={`text-p18 font-normal ${
            titlecss ? titlecss : "text-[#434343]"
          } `}
        >
          Name
        </label>

        <input
          type="text"
          className="w-full relative h-auto rounded-md px-2 py-2 flex items-center border border-[#e4e3e3]  placeholder:text-[#A8A8A8] "
          placeholder="Enter your Name *"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-sm font-medium text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </span>
      <span className="w-full relative flex flex-col   ">
        <label
          htmlFor="name"
          className={`text-p18 font-normal ${
            titlecss ? titlecss : "text-[#434343]"
          } `}
        >
          Phone
        </label>

        <input
          type="text"
          className="w-full relative h-auto flex rounded-md   px-2 py-2 items-center border border-[#e4e3e3]  placeholder:text-[#A8A8A8] "
          placeholder="Enter Your Phone *"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm font-medium text-red-500">
            {errors.phone.message}
          </p>
        )}
      </span>
      <span className="w-full relative flex flex-col   ">
        <label
          htmlFor="name"
          className={`text-p18 font-normal ${
            titlecss ? titlecss : "text-[#434343]"
          } `}
        >
          Email
        </label>

        <input
          type="text"
          className="w-full relative h-auto flex  px-2 py-2 items-center border border-[#e4e3e3] rounded-md placeholder:text-[#A8A8A8] "
          placeholder="Enter Your Email *"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </span>
      <div className="w-full relative flex items-center justify-end gap-2 ">
        <button
          className="w-full relative   h-auto flex items-center text-base bg-[#4CB151] px-5 py-2 text-white rounded-full text-p18 text-center justify-center cursor-pointer  hover:text-[#4CB151] hover:border-[#4CB151]
        border-transparent border hover:bg-transparent transition-all duration-300 "
        >
          {" "}
          Get Quote{" "}
        </button>
      </div>
    </motion.form>
  );
}

export default CommonFrom;
