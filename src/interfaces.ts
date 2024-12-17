export interface IEntity {
  type: 'Física' | 'Juridica';
  document: string;
  name: string;
  tradeName: string | null;
  zipCode: string;
  address: string;
  neighborhood: string;
  city: string;
  phoneNumber: string;
  email: string;
}