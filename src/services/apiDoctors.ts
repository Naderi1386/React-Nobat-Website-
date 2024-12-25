interface TimeSlotType {
  from: string;
  to: string;
  available: string;
}

export interface WorkingHoursType {
  day: string;
  time_slots: TimeSlotType[];
}

export interface PositionType {
  x: number;
  y: number;
}
export interface DoctorType {
  name: string;
  specialty: string;
  address: string;
  phone: string;
  image: string;
  coordinates: PositionType;
  rating: number;
  id: string;
  accepting_patients: boolean;
  working_hours: WorkingHoursType[];
}
const URL = "http://localhost:9000";

export const getDoctors = async () => {
  try {
    const request = await fetch(`${URL}/doctors`);
    const response = await request.json();

    return response as DoctorType[];
  } catch (error) {
    console.log(error);
    throw new Error("Doctors could not be loaded");
  }
};

export const getDoctor=async(id:string)=>{
   try {
     const request = await fetch(`${URL}/doctors/${id}`);
     const response = await request.json();

     return response as DoctorType;
   } catch (error) {
     console.log(error);
     throw new Error(`Doctor #${id} could not be loaded`);
   }
}
