export default ({ store, redirect }) => {
  const isAuthenticated = false;
  if (!isAuthenticated) {
    return redirect('/login')
  };
};