export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SEARCH_MOVIES':
      return [...payload];
    default:
      return state;
  }
};
