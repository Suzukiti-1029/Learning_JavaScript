const u1 = { name: '和洋' };
const u2 = { name: '花子' };
const u3 = { name: '涼子' };

const userRoles = new Map();

userRoles.set(u1, 'ユーザー');
userRoles.set(u2, 'ユーザー');
userRoles.set(u3, '管理者');

userRoles // チェーン化
  .set(u1, 'ユーザー')
  .set(u2, 'ユーザー')
  .set(u3, '管理者');

console.log(userRoles.get(u2));
