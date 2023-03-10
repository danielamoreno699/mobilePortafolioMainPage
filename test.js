const Objects = {
    name: 'luis',
    edad: 18,
  };

for (let i = 0; i < Objects.length; i ++) {
 const inputValue = Objects[i];
    console.log('parsed', Objects[inputValue]);
 }