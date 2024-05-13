import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from "flowbite-react";


export default function Confirmation() {
  const state = useSelector((state) => state.model?.modelState?.confirmation);
  const modelsArgs = useSelector(
    (state) => state.model?.modelArgs?.confirmation
  );
  console.log("modelsArgs", modelsArgs);
  const d = useDispatch();
  // close model
  const closeModel = () =>
    d(handleModel({ model: "confirmation", state: false }));
  const proceed = () => {
    if (modelsArgs?.callBack) modelsArgs.callBack();
    closeModel();
  };

  return (
    <Modal show={state} size="md" onClose={closeModel} popup>
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this product?
        </h3>
        <div className="flex justify-center gap-4">
          <Button color="failure" onClick={closeModel}>
            {"Yes, I'm sure"}
          </Button>
          <Button color="gray" onClick={closeModel}>
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
  );
}
