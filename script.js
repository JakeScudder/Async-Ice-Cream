let supplies = {
  Fruit: ["strawberry", "mango", "pineapple", "banana"],
  Liquid: ["almond milk", "cashew milk", "coconut water"],
  Type: ["smoothie", "smoothie bowl"],
  Topping: ["cashew butter", "granola", "blueberry", "strawberry", "mango"],
  Booster: ["hemp protein", "chia seeds", "maca", "cbd", "thc"],
};

let order = (fruitName, call_production) => {
  setTimeout(() => {
    console.log(`${supplies.Fruit[fruitName]}`);

    call_production(0);
  }, 2000);
};

let production = (liquidName) => {
  console.log("Production has started");

  setTimeout(() => {
    console.log("The fruit has been chopped");

    setTimeout(() => {
      console.log(`${supplies.Liquid[liquidName]} was added`);

      setTimeout(() => {
        console.log("The blender was turned on, keep a hand on the lid!");

        setTimeout(() => {
          console.log(`You chose a ${supplies.Type[0]}`);

          setTimeout(() => {
            console.log(`${supplies.Topping[0]} as a topping`);
            setTimeout(() => {
              console.log(
                `You added ${supplies.Booster[0]} as a booster, okay mr big bucks!`
              );

              setTimeout(() => {
                console.log(`Your ${supplies.Type[0]} is ready!`);
              }, 1000);
            }, 1000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 1000);
  }, 2000);
};

order(0, production);

// liquidName,
// typeName,
// toppingsName,
// boostersName,
