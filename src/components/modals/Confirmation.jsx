import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleModel } from "../../redux/layoutSlices/modelSlice";
import { Button, Modal } from "react-daisyui";

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
<Modal.Legacy  open={state}>
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>This modal works with a legacy mode!</Modal.Body>

        <Modal.Actions>
          <Button onClick={closeModel}>Close</Button>
        </Modal.Actions>
      </Modal.Legacy>
  );
}
