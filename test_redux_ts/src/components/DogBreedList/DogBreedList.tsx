import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDogBreedListSelector, dogBreedActions } from "../../store";
import "./DogBreedList.css";

type DogBreedListProps = {
  className?: string;
};

function DogBreedList({ className }: DogBreedListProps) {
  const dispatch = useDispatch();
  const dogBreedList = useSelector(getDogBreedListSelector);

  useEffect(() => {
    const getDogBreedList = async () => {
      try {
        const res = await fetch("https://dogapi.dog/api/v2/breeds", {
          method: "GET",
        });
        const data = await res.json();
        // xử lý format lại data
        const dogBreedList = data.data.map((dogBreed: any) => {
          return {
            id: dogBreed.id,
            name: dogBreed.attributes.name,
            description: dogBreed.attributes.description,
            life: {
              max: dogBreed.attributes.life.max,
              min: dogBreed.attributes.life.min,
            },
          };
        });
        dispatch(dogBreedActions.addDogBreedList(dogBreedList));
      } catch (err) {
        alert("Server đã xảy ra lỗi vui lòng thử lại sau!");
      }
    };
    getDogBreedList();
  }, [dispatch]);
  return (
    <div className={className + " dogbreedList"}>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Vòng Đời</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {dogBreedList.length > 0 ? (
            dogBreedList.map((breed, index) => (
              <tr>
                <td>{index}</td>
                <td>
                  <a
                    href={`http://localhost:3000/breeds/${breed.id}`}
                    className="text-info"
                  >
                    {breed.name}
                  </a>
                </td>
                <td className="td-description">{breed.description}</td>
                <td>
                  {breed.life.min} - {breed.life.max} năm
                </td>
                <td className="d-flex">
                  <button
                    className="btn btn-sm btn-primary mx-1"
                    data-target={breed.id}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    data-target={breed.id}
                  >
                    xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DogBreedList;
