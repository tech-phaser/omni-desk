import { EInputType, TFormField } from "../types/form-field";
import { z } from "zod";

// const regex = "^(?![0-9\s\W])[a-zA-Z]+(?:\s[a-zA-Z]+)*$";
export const registerFormSchema = z.object({
  firstname: z
    .string({ required_error: "enter your firstname" })
    .min(4, { message: "firstname should not be less than 4 words" }),
  middlename: z.string().optional(),
  lastname: z
    .string({ required_error: "enter your lastname" })
    .min(4, { message: "lastname should not be less than 4 words" }),
  email: z.string().email({ message: "please enter valid email" }),
  password: z
    .string({ required_error: "please enter something" })
    .min(1, { message: "enter your password" }),
  address: z.string({ required_error: "enter your address" }),
});

export type TRegisterFormSchema = z.infer<typeof registerFormSchema>;
export const registerFormDefaultValue: Partial<TRegisterFormSchema> = {
  firstname: "",
  middlename: "",
  lastname: "",
  email: "",
  password: "",
  address: "",
};

export const registerFormField: TFormField<TRegisterFormSchema>[] = [
  {
    label: "firstname",
    name: "firstname",
    placeholder: "eg. ram ",
    type: EInputType.TEXT,
    required: true,
  },
  {
    label: "middlename",
    name: "middlename",
    placeholder: "eg. bahadur",
    type: EInputType.TEXT,
    required: true,
  },
  {
    label: "lastname",
    name: "lastname",
    placeholder: "eg. shrestha",
    type: EInputType.TEXT,
    required: true,
  },
  {
    label: "Address",
    name: "address",
    placeholder: "Eg. enter your address",
    type: EInputType.TEXT,
    required: true,
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Eg. enter your email",
    type: EInputType.EMAIL,
    required: true,
  },
  {
    label: "Password",
    name: "password",
    placeholder: "********",
    required: true,
    type: EInputType.PASSWORD,
  },
];
