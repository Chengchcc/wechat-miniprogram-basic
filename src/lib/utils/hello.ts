import { getUserInfo } from "../../service/user"

export function hello(msg: string): string {
  return `hello ${msg}`
}

export async function asyncHello(msg: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(hello(msg)), 2000)
  })
}

export async function greet(id: string) {
  const res = await getUserInfo({ id })
  console.log(`hello ${res.name},welcome.`)
}