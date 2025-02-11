"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

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

function Modal({ children }: { children: React.ReactNode }) {
  const route = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormInputs> = async () => {
    reset();
    route.push("/thank-you");
  };

  return (
    <Dialog>
      <DialogTrigger className="w-fit relative h-auto ">
        {children}
      </DialogTrigger>
      <DialogContent className=" max-w-[500px] md:max-w-[600px] bg-white p-7">
        <DialogHeader>
          <DialogTitle className="w-full relative h-auto flex flex-col gap-2">
            <h2 className="w-full relative text-p32 font-medium text-webaccent">
              Tell us what you need?
            </h2>
            <p className="text-p18 font-medium text-webtext">
              We will connect with you asap!
            </p>
          </DialogTitle>
          <DialogDescription className="w-full relative mt-7 h-auto  gap-3 flex flex-col ">
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="w-full relative grid mt-5 grid-cols-2 h-auto gap-5"
            >
              <span className="flex flex-col gap-1 w-full col-start-1 col-end-3 ">
                <label
                  htmlFor=""
                  className="text-base font-medium text-webtext"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full    py-3 px-3 rounded-lg relative h-auto border border-[#e9e9e9] "
                  placeholder="Enter Your Name"
                  {...register("fullName")}
                />

                {errors.fullName && (
                  <p className="text-sm font-medium text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </span>
              <span className="flex flex-col gap-1 w-full col-start-1 col-end-2 ">
                <label
                  htmlFor=""
                  className="text-base font-medium text-webtext"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full relative     py-3 px-3 h-auto border border-[#e9e9e9] rounded-lg "
                  placeholder="Enter Your Email"
                  {...register("email")}
                />
                
                {errors.email && (
                  <p className="text-sm font-medium text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </span>
              <span className="flex flex-col gap-1 w-full col-start-2 col-end-3 ">
                <label
                  htmlFor=""
                  className="text-base font-medium text-webtext"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full relative h-auto   py-3 px-3 border border-[#e9e9e9]  rounded-lg"
                  placeholder="Enter Your Number"
                  {...register("phone")}
                />
                  {errors.phone && (
                  <p className="text-sm font-medium text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </span>
              <span className="flex flex-col gap-1 w-full col-start-1 col-end-3 ">
                <label
                  htmlFor=""
                  className="text-base font-medium text-webtext"
                >
                  Full Name
                </label>
                <select
                  className="w-full relative h-auto   py-3 px-3 border border-[#e9e9e9] text-webtext font-medium"
                  {...register("requirements")}
                >
                  <option value="flow meter">Flow Meter</option>
                  <option value="flow meter">Flow Meter</option>
                  <option value="flow meter">Flow Meter</option>
                  <option value="flow meter">Flow Meter</option>
                  <option value="flow meter">Flow Meter</option>
                </select>
              </span>

              <button className="w-full px-10  py-2 rounded-full bg-[#4CB151] text-base font-medium hover:bg-transparent hover:text-[#4CB151] text-white border border-transparent hover:border-[#4CB151] relative flex justify-center transition-all duration-300 items-center col-start-2 col-end-3 ">
                Get Quote
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
