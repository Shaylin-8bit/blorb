export function hasRank(user, arr) {
  for (let a in arr) {
    console.log(arr[a]);
    if (user.roles.cache.some((role) => role.name === arr[a])) {
      return true;
    }
  }
  return false;
}