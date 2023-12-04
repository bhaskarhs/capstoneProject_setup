import axios from "axios";
export default (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/changes?page=1&api_key=9c835ffb86b03bf9b234d2535fb33a2a`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzgzNWZmYjg2YjAzYmY5YjIzNGQyNTM1ZmIzM2EyYSIsInN1YiI6IjYwMDMwZWEzYTc2YWM1MDAzZGE5ZTc5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ds8klf2UsnEqEBcCGqLCLemSUHIHDhXocB7uRHaEv9M",
        },
      }
    )
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch((e) => {
      console.log(e);
      res.json({ message: e });
    });
};
