export const fetchUsers = () =>
  $.ajax({
    url: "api/users",
    method: "GET"
  });

export const fetchUser = id =>
  $.ajax({
    url: `api/users/${id}`,
    method: "GET"
  });

export const createUser = user =>
  $.ajax({
    url: "api/users",
    method: "POST",
    data: { user }
  });

export const updateUser = user =>
  $.ajax({
    method: "PATCH",
    url: `/api/users/${user.id}`,
    data: { user }
  });
