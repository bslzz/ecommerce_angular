export interface IProduct {
  id: number;
  name: string;
  descriptions: string;
  price: number;
  availableSince: Date;
  isActive: boolean;
  categoryId: number;
  productImages: IProductImage[];
}

export interface IProductImage {
  id: number;
  base64Image: string;
  mime: string;
  imageName: string;
  productId: number;
  isActive: boolean;
}
