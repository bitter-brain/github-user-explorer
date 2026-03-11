import { useAppDispatch, useAppSelector } from '../../app/store'
import { loadUser, loadRepos } from '../../entities/user/model/userSlice'
import { clearUser } from '../../entities/user/model/userSlice'

export const useUser = () => {
  const dispatch = useAppDispatch()

  const { user, repos, loading, error } = useAppSelector(
    (state) => state.user
  )

  const searchUser = (username: string) => {
    if (!username) {
      dispatch(clearUser());
      return;
    }
    dispatch(loadUser(username))
    dispatch(loadRepos(username))
  }

  return { user, repos, loading, error, searchUser }
}