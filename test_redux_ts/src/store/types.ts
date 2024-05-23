export type dogBreed = {
  id: number;
  name: string;
  description: string;
  life: { max: number; min: number };
};

export type action = {
  type: string;
  payload?: any;
};

export type state = {
  dogBreedList: dogBreed[];
};
