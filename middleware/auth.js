import Cookies from 'universal-cookie'

// middlewareはexport defaultによってただ一つだけの関数を返すファイル

export default ({ req, route, redirect }) => {
  console.log(route.path)

  if (['/home'].includes(route.path)) {
    return
  }

  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')

  if (credential && route.path === '/login') {
    return redirect('/home')
  }
  if (!credential && route.path !== '/login') {
    return redirect('/login')
  }
}
