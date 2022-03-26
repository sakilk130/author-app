import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetchAuthor = async (limit: number, skip: number) => {
  console.log({ limit, skip });
  const res = await axios.get(
    `https://api.quotable.io/authors?limit=${limit}&skip=${skip}`
  );
  return res.data;
};

export const fetchPrevFavtData = () => {
  return localStorage.getItem("favt_author")
    ? JSON.parse(localStorage.getItem("favt_author") || "")
    : [];
};

const addAuthor = (author: any) => {
  const prevFavtData = fetchPrevFavtData();

  if (prevFavtData.length === 0) {
    return localStorage.setItem("favt_author", JSON.stringify([author]));
  } else {
    return localStorage.setItem(
      "favt_author",
      JSON.stringify([...prevFavtData, author])
    );
  }
};

export const useFetchAuthor = (limit = 10, skip = 0, page = 1) => {
  return useQuery(["authors", page], () => fetchAuthor(limit, skip), {
    refetchOnWindowFocus: false,
  });
};

export const useAddFavoriteAuthor = () => {
  const queryClient = useQueryClient();

  return useMutation(async (author: any) => addAuthor(author), {
    onSuccess: () => {
      queryClient.invalidateQueries("favt_author");
    },
  });
};

export const useFetchFavoriteAuthor = () => {
  return useQuery("favt_author", () => fetchPrevFavtData());
};

export const useRemoveFavtAuthor = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: any) => {
      const prevData = fetchPrevFavtData();
      const newData = prevData.filter((data: any) => data.id !== id);
      console.log(id);
      localStorage.setItem("favt_author", JSON.stringify(newData));
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favt_author");
      },
    }
  );
};
