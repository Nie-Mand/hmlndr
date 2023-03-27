export function getQuote(l: string) {
  switch (l) {
    case 'H':
      return "HEAD's up, I'm a Full Stack Dev"
    case 'M':
      return 'Mine are Git Pushes and Millions'
    case 'L':
      return 'Lit it up, like Docker on my PC'
    case 'N':
      return 'NO JAVA, NO PHP, NO JAVASCRIPT'
    case 'D':
      return 'DevOps & Cloud, My Fav Job'
    case 'R':
      return 'REACT 4EVER, REACT 4LIFE'
    default:
      return 'I Code for the fun of it'
  }
}
