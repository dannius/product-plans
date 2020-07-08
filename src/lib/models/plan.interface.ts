export interface IPlan {
  id: string;
  currency: string;
  priceCents: number;
  paymentInterval?: string;
  interval?: string;
}
