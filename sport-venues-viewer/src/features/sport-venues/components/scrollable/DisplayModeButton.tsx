import Image from 'next/image';

interface DisplayModeButtonProps {
  isActive: boolean;
  onClick: () => void;
  iconSrc: string;
}

export function DisplayModeButton({
  isActive,
  onClick,
  iconSrc,
}: DisplayModeButtonProps) {
  return (
    <button
      className={`cursor-pointer rounded-[2px] p-1 ${isActive ? 'bg-background' : ''}`}
      onClick={onClick}
    >
      <Image src={iconSrc} width={30} height={30} alt='View as cards' />
    </button>
  );
}
