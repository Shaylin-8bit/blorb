export function hasRank(user, arr) {
  for (let a in arr) {
    if (user.roles.cache.some((role) => role.name === arr[a])) {
      return true;
    }
  }
  return false;
}