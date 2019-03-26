// function init() {
//   //put any page initialization/handlebars initialization here
// }
// document.addEventListener("DOMContentLoaded", function(event) {
//   init()
// })

let recipe={name:"",description:"",ingredients:new Array(6).fill("<input type='text' name='ingredients'/>")}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper("displayIngredient",function(){
  return new Handlebars.SafeString("<li name='ingredients'>"+this.name+"</li>")
})
Handlebars.registerPartial("recipeDetailsPartial",document.getElementById("recipe-details-partial").innerHTML);
//
Handlebars.registerPartial("recipeFormPartial",document.getElementById("recipe-form-partials").innerHTML);

renderTemplate(document.getElementById("recipe-form-template").innerHTML,document.getElementById("main"),recipe);

}

function renderTemplate(template,root,content){
  root.innerHTML=Handlebars.compile(template)(content)
}

function createRecipe(){
  recipe={name:"",description:"",ingredients:new Array(6).fill("<input type='text' name='ingredients'/>")}
  const main=document.getElementById("main");
  renderTemplate(document.getElementById("recipe-form-template").innerHTML,main,recipe);

  let recipeTemplate=document.getElementById("recipe-template").innerHTML;
  let recipeTemplateFn=Handlebars.compile(recipeTemplate);
  main.innerHTML+=recipeTemplateFn(recipe);
}

function handleSubmit(){
  let name=document.getElementById("name").value;
  let description=document.getElementById("description").value;
  let ingredients=document.getElementsByName("ingredients").value;
  recipe={name,description,ingredients}
  //show recipe details
  const showRecipeTemplate=document.getElementById("recipe-details-partial").innerHTML;
  const main=document.getElementById('main');
  renderTemplate(showRecipeTemplate,root,recipe)
}

function displayEditForm(){
  const recipeFormTemplate=document.getElementById("recipe-form-template").innerHTML;
  const recipeFormTemplateFn=Handlebars.compile(recipeFormTemplate);
  const main=document.getElementById('main');

  main.innerHTML=recipeFormTemplateFn({recipe})
}

function updateRecipe(){
let recipeTemplate=document.getElementById("recipe-template").innerHTML;
const main=document.getElementById('main');
renderTemplate(recipeTemplate,main,recipe)
}



document.addEventListener("DOMContentLoaded", function(event) {
  init()
})