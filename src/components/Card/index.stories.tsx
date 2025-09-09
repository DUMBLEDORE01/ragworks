import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter, CardImage } from ".";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <h2 className="text-lg font-bold">Basic Card</h2>
      </CardHeader>
      <CardBody>
        <p className="text-gray-600">
          This is a simple card with header, body, and footer.
        </p>
      </CardBody>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardImage src="https://picsum.photos/400/200" alt="Random" />
      <CardBody>
        <h2 className="text-lg font-bold">Card with Image</h2>
        <p className="text-gray-600">
          This card includes an image at the top, with content below.
        </p>
      </CardBody>
      <CardFooter>
        <Button variant="outline">Learn More</Button>
      </CardFooter>
    </Card>
  ),
};

export const Product: Story = {
  render: () => (
    <Card className="max-w-sm">
      <CardImage src="https://picsum.photos/400/250" alt="Product" />
      <CardBody>
        <h2 className="text-lg font-bold">Product Name</h2>
        <p className="text-gray-600">This is a product description.</p>
        <p className="text-primary-600 font-semibold mt-2">$49.99</p>
      </CardBody>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Details</Button>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
};
