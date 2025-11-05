/**
 * Contact constants
 * Define informações de contato da empresa
 */

export interface ContactInfo {
  type: string;
  label: string;
  value: string;
  icon: string;
}

export const CONTACT_INFO: ContactInfo[] = [
  {
    type: "email",
    label: "Email",
    value: "contato@startuptech.com",
    icon: "mail",
  },
  {
    type: "phone",
    label: "Telefone",
    value: "+55 (11) 98765-4321",
    icon: "phone",
  },
  {
    type: "location",
    label: "Localização",
    value: "São Paulo, Brasil",
    icon: "map-pin",
  },
] as const;

