"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Store desc"
      isOpen={storeModal.isOpen}
      onCLose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};
