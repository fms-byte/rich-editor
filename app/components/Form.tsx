"use client";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";

interface FormData {
  title: string;
  description: string;
}

const Form = () => {
  const [content, setContent] = useState("");
  const [post, setPost] = useState<FormData>({ title: "", description: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setPost({ title: data.title, description: content });
    // console.log(data);
    // console.log(post);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">
              {errors.title.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            init={{
              plugins:
                "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              tinycomments_mode: "embedded",
              tinycomments_author: "Author name",
              mergetags_list: [
                { value: "First.Name", title: "First Name" },
                { value: "Email", title: "Email" },
              ],
              ai_request: (
                request: any,
                respondWith: { string: (arg0: () => Promise<never>) => any }
              ) =>
                respondWith.string(() =>
                  Promise.reject("See docs to implement AI Assistant")
                ),
            }}
            initialValue="Welcome to TinyMCE!"
            onInit={(evt, editor) => { setContent(editor.getContent({ format: 'html' })) }}
            onEditorChange={(newContent, editor) => {
              setContent(editor.getContent({ format: 'html' }));
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4">
        <p className="text-xl font-semibold">Content</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-l font-semibold mb-1">Title</p>
          <p className="bg-white p-2 rounded-lg mb-2">{post.title}</p>
          <p className="text-l font-semibold mb-1">Description</p>
          <div
            className="bg-white p-2 rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.description }}
          ></div>
        </div>

      </div>
    </div>
  );
};

export default Form;
