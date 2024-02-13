export const handleImageChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setImage: (value: string | null) => void,
) => {
  const selectedImage = event.target.files && event.target.files[0];
  if (selectedImage) {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(selectedImage);
  }
};
