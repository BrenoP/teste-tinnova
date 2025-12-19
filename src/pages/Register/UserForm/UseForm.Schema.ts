import z from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;


export const userSchema = z.object({
  name: z.string().min(3, "Campo deve conter 3 caracteres ou mais"),
  email: z.string().regex(emailRegex, "Email inválido"),
  cpf: z.string().regex(cpfRegex, "CPF inválido"),
  phone: z.string().regex(phoneRegex, "Telefone inválido"),
});

export type UserSchema = z.infer<typeof userSchema>;