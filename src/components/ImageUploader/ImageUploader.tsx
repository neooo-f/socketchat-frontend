import { useState } from 'react';
import { handleImageChange } from '../../util/imageHelper';

export const ImageUploader: React.FC<{
  onUpload: (file: File) => void;
  onRemove: () => void;
}> = ({ onUpload, onRemove }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      handleImageChange(event, setImagePreview);
      onUpload(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="imageInput"
      />
      <label htmlFor="imageInput">
        <div className="relative w-40 h-40 rounded-full border-2 border-gray-400 flex justify-center items-center overflow-hidden cursor-pointer">
          {imagePreview ? (
            <>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </>
          ) : (
            <span className="text-gray-400">Select Image</span>
          )}
        </div>
      </label>
      <div
        onClick={() => {
          onRemove();
          setImagePreview(null);
        }}
        className="mt-2 bg-white text-blue-500 font-bold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white cursor-pointer"
      >
        X
      </div>
    </div>
  );
};
