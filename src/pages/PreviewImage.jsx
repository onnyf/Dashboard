import { useParams } from "react-router-dom";

const investments = [
  { id: "01", image: "/Rectangle 36.png" },
  { id: "02", image: "/Rectangle 5.svg" },
  { id: "03", image: "/Rectangle 3.svg" },
  // add others as needed
];

const PreviewImage = () => {
  const { id } = useParams();
  const investment = investments.find((inv) => inv.id === id);

  if (!investment) {
    return <div>Image not found</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <img src={investment.image} alt="Preview" className="max-w-full max-h-full" />
    </div>
  );
};

export default PreviewImage;
