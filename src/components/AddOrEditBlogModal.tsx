import React, { useEffect } from "react";
import { Modal, TextInput, Textarea, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BlogType } from "./Blog";

type Props = {
  editValues?: BlogType;
  opened: boolean;
  onClose: () => void;
  onSubmit: (title: string, body: string) => void;
};

export default function AddOrEditBlogModal({
  opened,
  onClose,
  editValues,
  onSubmit,
}: Props) {
  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  useEffect(() => {
    const setFormValues = () => {
      if (editValues) {
        form.setValues({ title: editValues.title, body: editValues.body });
      } else {
        form.setValues({ title: "", body: "" });
      }
    };
    setFormValues();
  }, [editValues]);

  const handleSubmit = (values: typeof form.values) => {
    onSubmit(values.title, values.body);
  };

  return (
    <>
      <Modal opened={opened} title="New Post" onClose={onClose}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput {...form.getInputProps("title")} />
          <Textarea {...form.getInputProps("body")} />
          <Button type="submit">Submit</Button>
        </form>
      </Modal>
    </>
  );
}
