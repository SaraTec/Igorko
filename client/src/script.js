function myScript(){
  const contentContainer = document.getElementById('content');

  const showCategory = async (categoryId, categoryName) => {
    let content= "";
    console.log("categoryId = ", categoryId)
    console.log("categoryName = ", categoryName)
    let items;
    if(categoryId == 0){
      const {data} = await axios.get(`http://localhost:5500/api/item/random`);
      const [categoryName, ...itemsData] = data;
      items = itemsData;
      content+=`<h1>${categoryName}</h1>`
    } else {
      content+=`<h1>${categoryName}</h1>`
      const {data: itemsData} = await axios.get(`http://localhost:5500/api/item/${categoryId}`);
      items = itemsData;
    }

    items.length && items.map(({name, picture, price}) => {
      content+=`
      <div class="item">
        <img src="${picture}" alt="">
        <h4 class="name">${name}</h4>
        <p class="price">${price}</p>
      </div>
      `
    })
    contentContainer.innerHTML = content;
  }

  const goHome = async() => {
    //To Clean
    contentContainer.innerHTML=""
    const {data: categoryData} = await axios.get(`http://localhost:5500/api/category`);

    let categoryElements = ""
    categoryData.map(category => {
      categoryElements+=`<button name="${category._id}" type="button" class="btn btn-primary category"  style="margin-right: 10px;">${category.name}</button>`
    })
    categoryElements+=`<button name="0" type="button" class="btn btn-primary category" style="margin-right: 10px;">Specials</button>`
    contentContainer.innerHTML=`<div class="category-buttons">${categoryElements}</div>`;
    const categories = document.querySelectorAll('.category');
    categories.forEach(categoryButton => {
      categoryButton.addEventListener("click", () => showCategory(categoryButton.getAttribute("name"), categoryButton.innerText))
    })
  }

  const create = async() => {
    const response = await axios.get(`http://localhost:5500/api/item/create`);
    //const response = await axios.get(`http://localhost:5500/api/category/create`);
    console.log("response = ", response)
  }

  const goCatalog = async() => {
    //To Clean
    contentContainer.innerHTML="Catalog"
  }

  const goHomeButton = document.getElementById('goHome');
  goHomeButton.addEventListener("click", goHome);
  const goCatalogButton = document.getElementById('goCatalog');
  goCatalogButton.addEventListener("click", goCatalog);
  goHome();
  const createButton = document.getElementById('create');
  createButton.addEventListener("click", create);
}

window.addEventListener("load", myScript);