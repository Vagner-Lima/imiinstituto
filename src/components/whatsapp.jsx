import { IconBrandWhatsapp } from "@tabler/icons-react";

const telefone = "5521980724943";

const mensagem =
  "Olá! Vim pelo site e gostaria de saber mais sobre os serviços do IMI.";

export const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

export default function WhatsAppButton() {

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center text-white bg-green-600 rounded-full">
      <IconBrandWhatsapp
        size={35}
      />
    </a>
  );
}