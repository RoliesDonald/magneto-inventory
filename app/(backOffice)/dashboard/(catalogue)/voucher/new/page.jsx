"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/formInputs/ImageInput";
import SubmitBtn from "@/components/formInputs/SubmitBtn";
import TextAreaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import generateVoucherCode from "@/lib/generateVoucherCode";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewVoucherPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [voucherCode, setVoucherCode] = useState();
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(voucher);
  async function onSubmit(data) {
    {
      /*
      -id => auto generated
      -voucher title
      -voucher code
      -voucher valid date
      -slug => auto generated
      -description
      -image
      */
    }
    const voucherCode = generateVoucherCode(
      data.title,
      data.vaoucherValid,
      data.vaoucherExpired,
      data.description
    );

    // const slug = generateSlug(data.title);
    data.voucherCode = voucherCode;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/voucher", data, "Voucher", reset);
    setImageUrl("");
  }
  return (
    <div className="space-y-2">
      {/* Header */}
      <FormHeader title="New Voucher" btnTitle="Cancel and Back" />
      <div className="flex items-center justify-between py-2 px-3 text-slate-500 dark:text-slate-300 rounded-xl shadow-lg bg-slate-300   dark:bg-bluebm-800/70 mx-auto my-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl p-2 "
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              labelTitle="Voucher Title"
              name="title"
              register={register}
              errors={errors}
              className="w-full"
            />
            <TextInput
              labelTitle="Voucher Code"
              name="vaoucherCode"
              register={register}
              errors={errors}
              className="w-full"
              defaultValue="your code"
            />
            <TextInput
              labelTitle="Valid Date"
              name="vaoucherValid"
              inputType="date"
              register={register}
              errors={errors}
              className="w-full"
            />
            <TextInput
              labelTitle="Expired Date"
              name="vaoucherExpired"
              inputType="date"
              register={register}
              errors={errors}
              className="w-full"
            />
            <TextAreaInput
              label="Voucher Descriptions"
              name="description"
              register={register}
              errors={errors}
            />
            <ImageInput
              label="Voucher Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="imageUploader"
            />
          </div>
          <SubmitBtn
            isLoading={loading}
            btnTitle="New Voucher"
            loadingBtnTitle="Creating Category, please wait..."
          />
        </form>
      </div>
    </div>
  );
}
