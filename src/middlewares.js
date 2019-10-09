export const isAuthenticated = request => {
  if (!request) {
    throw Error("You need to login!");
  }
  return;
};
