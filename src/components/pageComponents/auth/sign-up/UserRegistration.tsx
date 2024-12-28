import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import {
  registerFormDefaultValue,
  registerFormField,
  registerFormSchema,
  TRegisterFormSchema,
} from "../../../../model/register";

import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserRegistration = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefaultValue,
  });

  //post data to backend
  const postData = async (val: TRegisterFormSchema) => {
    console.log(val);
    try {
      const res = await axios.post(
        "https://omnidesk-backend-nest-js-9naq.onrender.com/auth/signup",
        val,
      );
      if (res.status === 200 || res.status === 201) {
        setLoading(true);
        toast.success("user successfully registered");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to register");
    } finally {
      setLoading(false);
    }
  };

  async function onSubmit(values: TRegisterFormSchema) {
    postData(values);

    form.reset();
    console.log(values);
  }

  return (
    <section className="container py-10">
      <ToastContainer position="bottom-center" transition={Slide} />
      <div>
        <Form {...form}>
          <h2 className="text-center text-2xl font-semibold leading-10">
            Register your account
          </h2>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto grid w-full max-w-lg grid-cols-1 gap-4 py-4 sm:grid-cols-2"
          >
            {registerFormField.map((formField) => (
              <FormField
                key={formField.name}
                control={form.control}
                name={formField.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      {formField.label}
                    </FormLabel>
                    <FormControl>
                      <input
                        placeholder={formField.placeholder}
                        required={formField.required}
                        {...field}
                        className="focus:outline-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <div className="flex justify-center sm:col-span-2">
              <button type="submit" disabled={loading}>
                {loading ? "loaidng..." : "Register"}
              </button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default UserRegistration;
