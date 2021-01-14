import axios from 'axios';

export default {
  async getTourists() {
    let response = await axios.get('http://localhost:8000/tourists');
    console.log(response);
    return response.data;
  },

  async getTouristById(touristId) {
    let response = await axios.get(
      `http://localhost:8000/tourists/${touristId}`
    );
    console.log(response);
    return response.data;
  },

  async deleteTouristById(touristId) {
    let response = await axios.delete(
      `http://localhost:8000/tourists/${touristId}`
    );
    console.log(response);
    return response.data;
  }
};
