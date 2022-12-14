import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qWtunoL1rKrFfzCRUz4E78zHT5n7DZEjoTtrWECkA8Iciub3-WJnZpQCK7dZLBuhD_Pp9qXKlI8Z65klWSr7wZVf5sePFoNW7NcyV6tA0HzCvtywXvWMPWu2eS2ZY3Yx",
  },
});
