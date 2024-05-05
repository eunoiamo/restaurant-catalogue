import CONFIG from '../globals/config';

class RestaurantAPI {
  static async getDataRestaurant() {
    const response = await fetch(`${CONFIG.BASE_URL}/list`);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(`${CONFIG.BASE_URL}/detail/${id}`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async insertDataReview(reviewData) {
    try {
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      };

      console.log(option);
      const response = await fetch(`${CONFIG.BASE_URL}/review`, option);
      const result = await response.json();

      if (result.error) {
        throw new Error('Cannot Add POST to API');
      } else {
        return result.message;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export default RestaurantAPI;
