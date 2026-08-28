import { IconBrandWhatsapp } from "@tabler/icons-react";

const mensagem =
  "Olá! Vim pelo site e gostaria de saber mais sobre os serviços do IMI.";

export function whatsappUrl(mensagem) {
  return `https://wa.me/5521980724943?text=${encodeURIComponent(mensagem)}`;
}

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-600
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-700
        hover:shadow-xl
        sm:bottom-8
        sm:right-8
      "
    >
      <IconBrandWhatsapp
        size={32}
        stroke={2}
      />
    </a>
  );
}

