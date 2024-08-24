"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import SelectInput from "@/components/backoffice/SelectInput";
import ImageInput from "@/components/formInputs/ImageInput";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import TextAreaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import ToggleInput from "@/components/formInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { CircleArrowLeft, Watch } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

export default function NewProductPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const suitableFor = [
    { id: 1, title: "All Diesel Engine" },
    { id: 2, title: "isuzu traga" },
    { id: 3, title: "Mitsubishi Canter" },
    { id: 4, title: "Mitsubishi Fighter" },
  ];
  const categories = [
    { id: 1, title: "Oil" },
    { id: 2, title: "Electrical" },
    { id: 3, title: "Under Stell" },
    { id: 3, title: "Driving System" },
  ];
  const supplier = [
    { id: 1, title: "Toko Jaya" },
    { id: 2, title: "Part Porong" },
    { id: 3, title: "Kedung Doro" },
  ];
  const {
    register,
    reset,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { isActive: false } });
  const isActive = watch("isActive");
  async function onSubmit(data) {
    {
      /*
      -id => auto()
      -title
      -slug => auto()
      -description
      -image[]
      -sku
      -barcode
      -buyPrice
      -salePrice
      -category
      -supplier
      -tags[]
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
  }
  return (
    <div className="space-y-2 mx-7">
      {/* Header */}
      <FormHeader title="New Product" btnTitle="Cancel" />
      <div className="flex w-full items-center justify-between py-2 px-3 text-slate-500 dark:text-slate-300 rounded-xl shadow-lg bg-slate-300   dark:bg-bluebm-800/70 mx-auto my-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-2 my-4">
          <div className=" grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              labelTitle="Product Title"
              name="title"
              register={register}
              errors={errors}
              className="w-full "
            />
            <TextInput
              labelTitle="Product SKU"
              name="sku"
              register={register}
              errors={errors}
              className="w-full "
            />
            <TextInput
              labelTitle="Product Barcode"
              name="barcode"
              register={register}
              errors={errors}
              className="w-full "
            />
            <TextInput
              labelTitle="Buy Price"
              name="priceBuy"
              inputType="number"
              register={register}
              errors={errors}
              className="w-full "
            />
            <TextInput
              labelTitle="Sale Price"
              name="priceSale"
              inputType="number"
              register={register}
              errors={errors}
              className="w-full "
            />
            <SelectInput
              label="Category"
              name="categoryId"
              register={register}
              errors={errors}
              options={categories}
            />
            <SelectInput
              label="Suitable for"
              name="suitableId"
              register={register}
              errors={errors}
              options={suitableFor}
              multiple={true}
            />
            <SelectInput
              label="Supplier"
              name="supplierId"
              register={register}
              errors={errors}
              options={supplier}
              className=""
            />

            <ImageInput
              label="Product Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="productImageUploader"
              className="flex-col-1 w-full"
            />
            <TextAreaInput
              label="Descriptions"
              name="description"
              register={register}
              errors={errors}
              className="flex-col-1 w-full"
            />
            <ToggleInput
              label="Publish Product ?"
              name="isActive"
              activeTitle="Yes"
              notActive="No"
              register={register}
              control={control}
            />
          </div>
          <SubmitBtn
            isLoading={loading}
            btnTitle="New Product"
            loadingBtnTitle="Creating Product, please wait..."
          />
        </form>
      </div>
    </div>
  );
}
