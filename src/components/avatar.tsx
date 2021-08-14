import Image from "next/image";

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture.url}
        layout="intrinsic"
        width="40px"
        height="40px"
        className="w-12 h-12 rounded-full mr-4"
        alt="Autor"
        title={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
