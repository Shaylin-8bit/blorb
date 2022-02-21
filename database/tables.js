const tables = {
  'users': {
    columns: [
      'name varchar(255)',
      'id int'
    ]
  },

  'roles': {
    columns: [
      'name varchar(255)',
      'permissions varchar(255)'
    ]
  }
};

export { tables };