import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from "../Modal"; // adjust the import path if needed
import { Button } from "../Button"; // reusing your button for open/close

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Modal Title</h2>
            <p className="text-gray-600">
              This is an example of a modal component in Storybook.
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Alert: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)} variant="outline">
          Show Alert Modal
        </Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Error"
        >
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-red-600">Error</h2>
            <p className="text-gray-600">Something went wrong. Please try again.</p>
            <div className="flex justify-end">
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Fullscreen: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Fullscreen Modal</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Fullscreen View"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold">Fullscreen Modal</h2>
            <p className="mt-2 text-gray-600">
              This modal takes up the whole screen.
            </p>
            <div className="mt-4 flex justify-end">
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};
