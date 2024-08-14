import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  id:    number;
  make:    string;
  model:    string;
  year:    number;
  color:    string;
  mileage:    number;
  price:    number;
  fuelType:    string;
  transmission:    string;
  engine:    string;
  horsepower:    number;
  features:    any[];
  owners:    number;
  image:    string;
}
