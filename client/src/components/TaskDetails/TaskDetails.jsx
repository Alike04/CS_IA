import { Dialog } from "@headlessui/react";
import React from "react";

const TaskDetailsDialog = () => {
  return (
    <Dialog>
      <Dialog.Panel>
        <Dialog.Title>Deactivate account</Dialog.Title>
        <Dialog.Description>
          This will permanently deactivate your account
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  );
};

export default TaskDetailsDialog;
