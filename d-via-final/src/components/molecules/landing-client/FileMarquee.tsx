"use client";
import { FileMarquee } from "@gloireondongo/d-via-design-system";

const files = [
  "Devis plomberie salle bain.pdf",
  "Renovation cuisine artisan .pdf",
  "toiture devis comparaison 3.pdf",
];

export default function FileMarqueeDvia() {
  return (
    <div className="space-y-6 py-10">
      <FileMarquee 
        files={Array.from({ length: 15 }, () => files[0])} 
        direction="left" 
        speed="normal"
        onFileClick={(fileName) => console.log('File clicked:', fileName)}
      />
      <FileMarquee 
        files={Array.from({ length: 15 }, () => files[1])} 
        direction="right" 
        speed="normal"
        onFileClick={(fileName) => console.log('File clicked:', fileName)}
      />
      <FileMarquee 
        files={Array.from({ length: 15 }, () => files[2])} 
        direction="left" 
        speed="normal"
        onFileClick={(fileName) => console.log('File clicked:', fileName)}
      />
    </div>
  );
}
