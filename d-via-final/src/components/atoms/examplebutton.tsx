import React from "react";
import { Button } from "@gloireondongo/d-via-design-system";

function examplebutton() {
  return (
    <Button
      variant="primary"
      size="md"
      onClick={() => console.log('Bouton cliqué!')}
    >
      Exemple button
    </Button>
  );
}

export default examplebutton;
