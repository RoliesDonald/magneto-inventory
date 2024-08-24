import { UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "",
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-start mb-2">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-slate-600 dark:text-slate-300"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2 bg-redbm-500 rounded-md shadow text-slate-200  py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <div className="flex items-center justify-center">
          <Image
            src={imageUrl}
            alt="Item image"
            width={300}
            height={300}
            className="rounded-2xl object-contain"
          />
        </div>
      ) : (
        <UploadDropzone
          className="border-2 border-solid dark:border-slate-300/40 border-bluebm-700/25 w-full h-52"
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            // Do something with the response
            toast.success("Image uploaded successfully");
            console.log("Files: ", res);
            console.log("Image uploaded successfully");
          }}
          onUploadError={(error) => {
            // Do something with the error.
            toast.error("Failed to Upload, Try again ...");
            console.log(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  );
}
