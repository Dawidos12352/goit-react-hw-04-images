import axios from 'axios';

export const fetchImagesFromAPI = async (searchQuery, currentPage) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '36589394-2143494a5fc7170f91521e5d8',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: currentPage,
      safesearch: 'true',
    },
  });
  return response.data;
};