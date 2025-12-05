import z4 from "zod/v4";
import { contactFormSchema } from "./schema";
import { FieldPath } from "react-hook-form";

export interface ServiceCategory {
  id: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  category: string;
  features: string[];
  image: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  borderColor: string;
}

export interface ServicesGridProps {
  categories: ServiceCategory[];
  services: Service[];
}

export interface WhyChooseUsFeature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  borderColor: string;
}

export type ButtonVariants =
  | "link"
  | "default"
  | "outline"
  | "destructive"
  | "secondary"
  | "ghost"
  | null
  | undefined;

export type ContactFormType = z4.infer<typeof contactFormSchema>;
export type ContactFormFieldNames = FieldPath<ContactFormType>;

export type ContactFormFieldsMap = {
  name: ContactFormFieldNames;
  label: string;
  placeholder: string;
};
