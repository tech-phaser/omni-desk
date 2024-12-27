import { useState } from "react";
// type Props = {}

import { useForm } from "react-hook-form"
import { registerFormDefaultValue, registerFormField, registerFormSchema, TRegisterFormSchema } from "../../model/register"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import { Slide, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

const UserRegistration = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useForm<TRegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: registerFormDefaultValue,
  });

  //post data to backend
  const postData= async (val: TRegisterFormSchema) =>{
    console.log(val);
    
    try {
      const res= await axios.post("https://omnidesk-backend-nest-js-9naq.onrender.com/auth/signup",val);
      if(res.status === 200 || res.status === 201){
          setLoading(true);
          toast.success("user successfully registered");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to register");
      
    }finally{
      setLoading(false);
    }
  }

  async function onSubmit(values: TRegisterFormSchema) {
    setError(false); 
    postData(values);
    
    form.reset();
    console.log(values);
  }

  return (
    <section className="container py-10">
       <ToastContainer position="bottom-center" transition={Slide} />
      <div>
        <Form {...form}>
          <h2 className="text-2xl font-semibold text-center leading-10">Register your account</h2>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto py-4"
          >
            {registerFormField.map((formField) => (
              <FormField
                key={formField.name}
                control={form.control}
                name={formField.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{formField.label}</FormLabel>
                    <FormControl>
                      <Input
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
            <div className="sm:col-span-2 flex justify-center">
              <Button type="submit" variant="default" disabled={loading}>
                {loading?"loaidng...":"Register"}
                
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default UserRegistration;