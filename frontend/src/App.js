import "./App.css";
import One from "./pages/One/One";
import Two from "./pages/Two/Two";
import Three from "./pages/Three/Three";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "./store";

function App() {
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const isEditMode = useSelector((state) => state.users.isEditMode);
  const isViewMode = useSelector((state) => state.users.isViewMode);
  const isAddMode = useSelector((state) => state.users.isAddMode);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {!selectedUser && !isAddMode && <One />}
      {selectedUser && isEditMode && <Two />}
      {isAddMode && <Two />}
      {selectedUser && isViewMode && <Three />}
      {(selectedUser || isAddMode) && (
        <button
          className="globalBtn hCenter"
          onClick={() => {
            dispatch(userActions.clearSelectedUser());
            dispatch(userActions.setEditMode(false));
            dispatch(userActions.setViewMode(false));
            dispatch(userActions.setAddMode(false));
          }}
        >
          Back
        </button>
      )}
    </div>
  );
}

export default App;
