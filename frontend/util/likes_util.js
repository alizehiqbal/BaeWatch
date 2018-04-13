export const likeSomeone = like =>
  $.ajax({
    method: "POST",
    url: "api/likes",
    data: { like }
  });

export const deleteLike = likeId =>
  $.ajax({
    method: "DELETE",
    url: `api/likes/${likeId}`
  });

export const fetchLikes = () => {
  $.ajax({
    method: "GET",
    url: "api/likes"
  });
};
