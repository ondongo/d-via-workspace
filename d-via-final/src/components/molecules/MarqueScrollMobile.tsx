import React from 'react'
import { FileMarquee } from '@d-via/design-system'

const mobileFiles = [
  "Devis plomberie.pdf",
  "Renovation cuisine.pdf",
  "Devis toiture.pdf",
  "Chauffage.pdf",
  "Électricité.pdf",
];

function MarqueScrollMobile() {
  return (
    <div className="md:hidden">
      <FileMarquee 
        files={mobileFiles} 
        direction="left" 
        speed="slow"
        onFileClick={(fileName) => console.log('Mobile file clicked:', fileName)}
      />
    </div>
  )
}

export default MarqueScrollMobile
