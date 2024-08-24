"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import SelectInput from "@/components/backoffice/SelectInput";
import ImageInput from "@/components/formInputs/ImageInput";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import TextAreaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCategoryPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const suitableFor = [
    { id: 1, title: "Honda" },
    { id: 2, title: "Suzuki" },
    { id: 3, title: "Toyota" },
  ];
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    {
      /*
      -id => auto generated
      -title
      -slug => auto generated
      -description
      -image
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/categories", data, "Category", reset);
    setImageUrl("");
  }
  return (
    <div className="space-y-2">
      {/* Header */}
      <FormHeader title="New Category" btnTitle="Cancel" />
      <div className="flex items-center justify-between py-2 px-3 text-slate-500 dark:text-slate-300 rounded-xl shadow-lg bg-slate-300   dark:bg-bluebm-800/70 mx-auto my-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl p-2 "
        >
          <div className=" grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              labelTitle="Category Title"
              name="title"
              register={register}
              errors={errors}
              className="w-full "
            />
            <SelectInput
              label="Suitable for"
              name="suitableId"
              register={register}
              errors={errors}
              options={suitableFor}
              className="w-full"
              multiple={false}
            />
            <TextAreaInput
              label="Descriptions"
              name="description"
              register={register}
              errors={errors}
            />
            <ImageInput
              label="Category Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="imageUploader"
            />
          </div>
          <SubmitBtn
            isLoading={loading}
            btnTitle="New Category"
            loadingBtnTitle="Creating Category, please wait..."
          />
        </form>
      </div>
    </div>
  );
}
