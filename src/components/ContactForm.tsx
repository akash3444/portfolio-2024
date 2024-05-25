"use client";

import Button from "@/shared/Button";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import { emailPattern } from "@/utils/validation";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  from: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        { ...formData },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      );
      alert("Your message has been sent.");
    } catch (error) {
      alert("Could not submit your form. Please try again.");
    }
  };

  /* It's recommended by react-hook-form to reset inside useEffect after submission. */
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-lg bg-white px-7 py-12"
    >
      <h4 className="text-3xl font-bold text-slate-950">Get In Touch</h4>
      <Input
        placeholder="Your Email"
        fullWidth
        {...register("from", {
          required: "This field is required",
          pattern: {
            value: emailPattern,
            message: "Invalid email",
          },
        })}
        type="email"
        error={errors.from?.message}
      />
      <Input
        placeholder="Subject"
        fullWidth
        {...register("subject", { required: "This field is required" })}
        error={errors.subject?.message}
      />
      <Textarea
        placeholder="Message"
        rows={3}
        fullWidth
        {...register("message", { required: "This field is required" })}
        error={errors.message?.message}
      />
      <Button
        variant="contained"
        fullWidth
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

export default ContactForm;
