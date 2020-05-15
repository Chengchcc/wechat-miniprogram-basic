interface IUserInfo {
  name: string,
  id: string
}
export async function getUserInfo(
  {
    id
  }: {
    id: string
  }
): Promise<IUserInfo> {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: 'foo' }), 2000)
  })
}

