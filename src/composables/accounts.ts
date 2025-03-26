export interface Account {
  name: string
  icon: string
  link: `https://${string}`
}

const accounts: Account[] = [
  {
    name: 'ArtStation',
    icon: 'artstation',
    link: 'https://www.artstation.com/keshyx',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/magdalena-jirku-81bb16210/?original_referer=https%3A%2F%2Fmagdalena-jirku.at%2F',
  },
  {
    name: 'XING',
    icon: 'xing',
    link: 'https://www.xing.com/profile/Magdalena_Jirku',
  },
]

export function useAccounts(): Account[] {
  return accounts
}
