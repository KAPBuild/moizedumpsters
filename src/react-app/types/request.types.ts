export interface RequestFormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  dumpsterSize: '10' | '20' | '30' | '40';
  projectType: string;
  deliveryDate: string;
  notes?: string;
}
