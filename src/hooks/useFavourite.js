import { useState, useEffect } from "react";

function useFavourite() {
  // const [jorge, setJorge] = useState([]);
  const [favourites, setFavourites] = useState([""]);

  const addFavourite = ({ characterId }) => {
    console.log(favourites);
    if (characterId) {
      setFavourites((oldArray) => [...oldArray, ...characterId]);
    } else {
      console.log("deu problema");
    }
  };

  // useEffect(() => {
  //   const favourites = JSON.parse(localStorage.getItem("favourites"));
  //   if (favourites) {
  //     setFavourites(favourites);
  //   }
  // }, []);

  useEffect(() => {
    console.log(favourites);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  //   const togglefavourite = (id) => {
  // 	favourites.find((favourite) => {
  // 		if (favourite.id === id) {
  // 			favourite.checked = !favourite.checked;
  // 		}
  // 		return setfavourites([...favourites]);
  // 	});
  // };

  return { addFavourite };
}

export default useFavourite;

// const deleteTodo = (id) => {
// 	let newTodos = todos.filter((todo) => todo.id !== id);
// 	setTodos([...newTodos]);
// };

// useEffect(() => {
// 	let completeArray = [];
// 	todos.filter((todo) => todo.complete === true && completeArray.push(todo));
// 	setCompletedTasks(completeArray.length);
// }, [todos]);

// useEffect(() => {
// 	let adderror = setTimeout(() => {
// 		setError(false);
// 	}, 2000);
// 	return () => {
// 		clearTimeout(adderror);
// 	};
// }, [error]);
