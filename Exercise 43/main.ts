//UNCHANGE MAGICIANS

//copy of an array before modifying it
function show_magicians(magicians: string[]): void{
  for (const magician of magicians){
      console.log(magician.charAt(0).toUpperCase() + magician.slice(1));

  }
}

//copying and manipulation

function make_great2(magicians: string[]): string[]{
  const greatMagicians: string[] = [];
for (let i = 0; i < magicians.length; i++){
    greatMagicians.push(magicians[i] + ' the great');
}
return greatMagicians;
}

const magicians3: string[] = ["Maham", "Maheen", "Tooba"];

const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);