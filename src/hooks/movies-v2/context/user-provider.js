import MovieContext from './index';

const UserProfileProvider = (props) => {
  const infoUser = {
    id: 1,
    name: 'Admin',
    email: 'admin@gmail.com',
    avatar: "https://image.tmdb.org/t/p/w300/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
  }

  return (
    <MovieContext.Provider value={infoUser}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default UserProfileProvider;