type TCategory = {
  categoryName: string;
};
type TAppState = {
  categoryName: string;
};
type THeader = {
  changeCategoryName: (name: string) => void;
};

export { TCategory, TAppState, THeader };
