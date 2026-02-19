const userData = await (await fetch('db/mock.json')).json();


export function fetchUser() {
  return userData;
}