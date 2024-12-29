import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  registerFormDefaultValue,
  registerFormField,
  registerFormSchema,
  TRegisterFormSchema,
} from "../../../../model/register";
import { toast } from "sonner";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefaultValue,
  });

  //post data to backend
  const postData = async (val: TRegisterFormSchema) => {
    setLoading(true);
    try {
      console.log(val);
      // const res = await axios.post(
      //   "https://omnidesk-backend-nest-js-9naq.onrender.com/auth/signup",
      //   val,
      // );
      // if (res.status === 200 || res.status === 201) {
      //   setLoading(true);
      //   toast.success("user successfully registered");
      // }
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
    <section className="container py-10 text-white">
      <div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx grid w-full max-w-lg gap-4 py-4"
        >
          {registerFormField.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="text-text-primary mb-2 block text-sm font-medium"
              >
                {field.label}
                {field.required && (
                  <span className="text-error-500 ml-1">*</span>
                )}
              </label>

              <input
                {...form.register(field.name)}
                type={field.type}
                placeholder={field.placeholder}
                className={`focus:ring-primary-500 w-full rounded-lg border px-4 py-2 transition-colors focus:border-transparent focus:ring-2 ${form.formState.errors[field.name] ? "border-error-500 bg-error-50" : "bg-background-light border-border"} `}
              />

              {form.formState.errors[field.name] && (
                <p className="text-error-500 mt-1 text-sm">
                  {form.formState.errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}
          <div className="flex justify-center sm:col-span-2">
            <button type="submit" disabled={loading}>
              {loading ? "loaidng..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
