var recipes = [
  {
    id: "teriyakichicken",
    title: "Teriyaki Chicken Bowl",
    sub: "Sweet and savory chicken over rice with vegetables",
    cuisine: "Asian",
    img: "https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 210,
    prep: "15 min",
    cook: "15 min",
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil"
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot."
    ],
    nutrition: { calories: "540 kcal", protein: "42g", carbs: "58g", fat: "14g", fiber: "4g", sodium: "1240mg" },
    tips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead"
    ]
  },
  {
    id: "quinoabowl",
    title: "Mediterranean Quinoa Bowl",
    sub: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    cuisine: "Mediterranean",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
    rating: 4.6,
    reviews: 198,
    prep: "20 min",
    cook: "25 min",
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, thinly sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley, chopped",
      "Tahini, lemon juice, garlic, and water (for dressing)"
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing."
    ],
    nutrition: { calories: "480 kcal", protein: "18g", carbs: "58g", fat: "20g", fiber: "10g", sodium: "540mg" },
    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein"
    ]
  },
  {
    id: "stirfry",
    title: "Chicken Stir-Fry",
    sub: "Quick and healthy stir-fry with colorful vegetables",
    cuisine: "Asian",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviews: 215,
    prep: "15 min",
    cook: "10 min",
    servings: 3,
    difficulty: "Easy",
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated"
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles."
    ],
    nutrition: { calories: "320 kcal", protein: "34g", carbs: "18g", fat: "12g", fiber: "5g", sodium: "840mg" },
    tips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch"
    ]
  }
];

var current = 0;

function createListItems(items) {
  var content = "";
  for (var i = 0; i < items.length; i++) {
    content = content + "<li>" + items[i] + "</li>";
  }
  return content;
}

function createTipCards(tips) {
  var content = "";
  for (var i = 0; i < tips.length; i++) {
    content = content + '<div class="tip-card">' +
                  '<i class="fa-solid fa-circle-check tip-card-icon"></i>' +
                  '<div>' + tips[i] + '</div>' +
                  '</div>';
  }
  return content;
}

function createNutriCard(value, label, typeClass, icon) {
  return (
    '<div class="col-md-6">' +
      '<div class="nutri-card ' + typeClass + '">' +
        '<div class="nutri-info">' +
          '<div class="nutri-icon-box">' +
            '<i class="fa-solid ' + icon + '"></i>' +
          '</div>' +
          '<span class="nutri-label">' + label + '</span>' +
        '</div>' +
        '<span class="nutri-val">' + value + '</span>' +
      '</div>' +
    '</div>'
  );
}

function show() {
  var rec = recipes[current];

  document.getElementById("recipeImg").src = rec.img;
  document.getElementById("recipeTitle").textContent = rec.title;
  document.getElementById("recipeSub").textContent = rec.sub;
  document.getElementById("ratingNum").textContent = rec.rating.toFixed(1);
  document.getElementById("ratingCount").textContent = "(" + rec.reviews + " reviews)";
  document.getElementById("prepTime").textContent = rec.prep;
  document.getElementById("cookTime").textContent = rec.cook;
  document.getElementById("servings").textContent = rec.servings + " people";

  document.getElementById("tagRow").innerHTML =
    '<span class="recipe-tag tag-difficulty">' + rec.difficulty + '</span>' +
    '<span class="recipe-tag tag-cuisine">' + rec.cuisine + '</span>';

  document.getElementById("ingredientList").innerHTML = createListItems(rec.ingredients);
  document.getElementById("instructionList").innerHTML = createListItems(rec.instructions);
  document.getElementById("tipsList").innerHTML = createTipCards(rec.tips);

  var n = rec.nutrition;
  var nutritionContent = "";
  nutritionContent += createNutriCard(n.calories, "Calories", "nutri-calories", "fa-fire");
  nutritionContent += createNutriCard(n.protein, "Protein", "nutri-protein", "fa-dumbbell");
  nutritionContent += createNutriCard(n.carbs, "Carbohydrates", "nutri-carbs", "fa-wheat-awn");
  nutritionContent += createNutriCard(n.fat, "Fat", "nutri-fat", "fa-droplet");
  nutritionContent += createNutriCard(n.fiber, "Fiber", "nutri-fiber", "fa-seedling");
  nutritionContent += createNutriCard(n.sodium, "Sodium", "nutri-sodium", "fa-cube");

  document.getElementById("nutritionGrid").innerHTML = nutritionContent;
}

function shuffle() {
  current++;
  if (current >= recipes.length) {
    current = 0;
  }
  show();
}

document.getElementById("shuffleBtn").addEventListener("click", shuffle);

show();