import axios from "axios";

export async function getHospitalInfo() {
  const response = await axios.get(
    "https://asia-south1-arogyam-super.cloudfunctions.net/app/hospitals?lat=0.0&lon=0.0&token=arogyam"
  );

  return response.data;
}


