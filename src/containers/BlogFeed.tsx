import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import AddOrEditBlogModal from "../components/AddOrEditBlogModal";
import Blog, { BlogType } from "../components/Blog";

type Props = {};

export default function BlogFeed({}: Props) {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [addOrEditOpened, setAddOrEditOpened] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState<BlogType>();

  useEffect(() => {
    setBlogs(dummyBlogs);
  }, []);

  const handleBlogAddOrEditClick = (blogId?: number) => {
    if (blogId) {
      const blog = blogs.find((blog) => blog.id === blogId);
      setBlogToEdit(blog);
    } else {
      setBlogToEdit(undefined);
    }
    setAddOrEditOpened(true);
  };

  const handleAddEditOnClose = () => {
    setAddOrEditOpened(false);
    setBlogToEdit(undefined);
  };

  const handleAddOrEditOnSubmit = (title: string, body: string) => {
    if (blogToEdit) {
      const updatedBlog = blogToEdit;
      updatedBlog.title = title;
      updatedBlog.body = body;
      setBlogs(
        blogs.map((blog) => {
          return blog.id === updatedBlog.id ? updatedBlog : blog;
        })
      );
    } else {
      const newBlog = {
        id: blogs.length + 1,
        date: today,
        title: title,
        body: body,
      };
      setBlogs([newBlog, ...blogs]);
    }
    handleAddEditOnClose();
  };

  return (
    <>
      <AddOrEditBlogModal
        onSubmit={handleAddOrEditOnSubmit}
        editValues={blogToEdit}
        opened={addOrEditOpened}
        onClose={handleAddEditOnClose}
      />
      <Button onClick={() => handleBlogAddOrEditClick()}>Add New Post</Button>
      {blogs.map((blog, index) => (
        <Blog
          blog={blog}
          key={index}
          handleEditClick={handleBlogAddOrEditClick}
        />
      ))}
    </>
  );
}

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let today = new Date().toLocaleDateString();

const dummyBlogs = [
  { id: 1, title: "Title Goes Here", body: lorem, date: today },
  { id: 2, title: "Title Goes Here", body: lorem, date: today },
  { id: 3, title: "Title Goes Here", body: lorem, date: today },
  { id: 4, title: "Title Goes Here", body: lorem, date: today },
];
