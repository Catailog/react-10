import type { ProductType } from '@/lectures/lecture26-exercise/data/products';

export type CartProduct = ProductType & { quantity: number };
