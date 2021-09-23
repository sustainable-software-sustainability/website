export default function (req, res, next) {
  const redirects = [
    {
      from: '/wosss21-home',
      to: '/wosss21/home'
    },
    {
      from: '/wosss21-agenda',
      to: '/wosss21/agenda'
    }
  ]
  const redirect = redirects.find(r => r.from === req.url)
  if (redirect) {
    res.writeHead(301, { Location: redirect.to })
    res.end()
  } else {
    next()
  }
}
