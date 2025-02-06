import Image from 'next/image';

const RangoliDesign = ({ position }) => {
  const styles = position === "left" ? "absolute left-0" : "absolute right-0";

  return (
    <div className={`rangoli ${styles}`}>
      <Image
        src="/rangoli.webp"
        alt="Rangoli Design"
        width={160}
        height={160}
        className="rounded-full"
      />
    </div>
  );
};

export default RangoliDesign; 