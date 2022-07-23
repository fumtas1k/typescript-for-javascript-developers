import axios from "axios";
export {};

interface Article {
  id: number;
  title: string;
  description: string;
}

const URL: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(URL).then(response => {
  let data: Article[] = response.data;
  data = [
    {
      id: 1,
      title: "title",
      description: "description",
    },
  ]
  console.log(data);
});


// (async function(): Promise<void> {
//   let res = await axios.get(URL)
//   let data: any = await res.data;
//   console.log(data);
// })();
