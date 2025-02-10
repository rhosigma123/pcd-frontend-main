"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

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

function ContactForm() {
  const route = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  // const onSubmit: SubmitHandler<FormInputs> = async (data) => {
  //   if (!executeRecaptcha) {
  //     alert("ReCAPTCHA not loaded");
  //     return;
  //   }

  //   try {
  //     const token = await executeRecaptcha();
  //     const response = await axios.post(`${NEXT_PUBLIC_API_URL}/contact-us`, {
  //       ...data,
  //       token,
  //       url,
  //     });
  //     console.log(response.data);
  //     reset();
  //     router.push("/thank-you"); // Navigate to a thank you page or similar
  //   } catch (error) {
  //     console.error("There was an error submitting the form:", error);
  //   }
  // };
  const onSubmit: SubmitHandler<FormInputs> = async () => {
    reset()
    route.push("/thank-you");
  };

  return (
    <motion.form
      initial={{
        transform: "translatex(-100px)",
        opacity: 0,
        pathLength: 0,
      }}
      whileInView={{
        transform: "translatex(0px)",
        opacity: 1,
        pathLength: 1,
      }}
      transition={{ type: "spring", ease: "easeOut", duration: 2 }}
      action={""}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full relative h-auto flex flex-col items-start gap-5 bg-websecondary px-5 py-5 border rounded-lg border-[#D4E8EA]"
    >
      <span className="w-full relative h-auto flex flex-col gap-1">
        <h2 className="text-p22 font-normal flex items-center gap-2  text-webaccent ">
          Ready for a{" "}
          <p className="text-p32 text-webaccent font-semibold">BIG CHANGE?</p>
        </h2>
        <p className="text-p18 font-normal text-webtext">
          Fill out the form to connect with us, we’ll reach back to you ASAP!
        </p>
      </span>
      <div className="w-full relative h-auto grid grid-cols-2 gap-2 md:gap-5  ">
        <span className="w-full relative h-auto flex flex-col col-start-1 col-end-3 ">
          <input
            type="text"
            className="text-base text-webtext w-full relative  h-auto rounded-lg  px-4 py-3  placeholder:text-[#666]  border border-[#E8E8E8]"
            placeholder="Enter Your Name"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-sm font-medium text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </span>
        <span className="w-full relative h-auto   flex flex-col col-start-1 md:col-end-2 col-end-3 ">
          <input
            type="text"
            className="text-base text-webtext w-full rounded-lg relative h-auto px-4 py-3 placeholder:text-[#666]  border border-[#E8E8E8]  "
            placeholder="Enter Your Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm font-medium text-red-500">
              {errors.email.message}
            </p>
          )}
        </span>

        <span className="w-full relative h-auto flex flex-col  col-start-1 md:col-start-2 md:col-end-3">
          <input
            type="text"
            className="text-base text-webtext w-full  rounded-lg relative h-auto  col-end-3 px-4 py-3 placeholder:text-[#666]  border border-[#E8E8E8]"
            placeholder="Enter Your Phone"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm font-medium text-red-500">
              {errors.phone.message}
            </p>
          )}
        </span>
        <textarea
          rows={3}
          className="text-base text-webtext w-full relative h-auto px-3  col-end-3 col-start-1 py-1 placeholder:text-[#666]  border border-[#E8E8E8]"
          placeholder="Enter Your Number"
        />
      </div>
      <button className=" w-full  justify-center md:w-fit relative h-auto flex items-center px-5 py-2 md:py-1 text-white transition-all duration-300  bg-webaccent rounded-full cursor-pointer border border-transparent hover:border-webaccent hover:bg-white hover:text-webaccent text-p18">
        Submit
      </button>
    </motion.form>
  );
}

export default ContactForm;
