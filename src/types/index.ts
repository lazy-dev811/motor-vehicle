export type IVehicle = {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
  name?: string;
  checkoutDate?: string;
  checkoutType?: "load" | "test-drive";
  checkbackDate?: string;
  checkbackRule?: string;
};

export type IModalProps = {
  show: boolean;
  onClose: () => void;
};

export type IMotor = {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicle[];
};
