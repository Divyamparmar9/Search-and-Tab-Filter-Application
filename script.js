const products = [
    { name: "Apple", category: "fruits", icon: "🍎" },
    { name: "Coffee", category: "beverages", icon: "☕" },
    { name: "Carrot", category: "vegetables", icon: "🥕" },
    { name: "Cake", category: "desserts", icon: "🍰" },
    { name: "Popcorn", category: "snacks", icon: "🍿" },
    { name: "Banana", category: "fruits", icon: "🍌" },
    { name: "Broccoli", category: "vegetables", icon: "🥦" },
    { name: "Tea", category: "beverages", icon: "🍵" },
    { name: "Cupcake", category: "desserts", icon: "🧁" },
    { name: "Pizza", category: "snacks", icon: "🍕" },
    { name: "Orange", category: "fruits", icon: "🍊" },
    { name: "Tomato", category: "vegetables", icon: "🍅" },
    { name: "Juice", category: "beverages", icon: "🧃" },
    { name: "Donut", category: "desserts", icon: "🍩" },
    { name: "Pretzel", category: "snacks", icon: "🥨" },
    { name: "Grapes", category: "fruits", icon: "🍇" },
    { name: "Corn", category: "vegetables", icon: "🌽" },
    { name: "Smoothie", category: "beverages", icon: "🥤" },
    { name: "Cookie", category: "desserts", icon: "🍪" },
    { name: "Hot Dog", category: "snacks", icon: "🌭" },
    { name: "Strawberry", category: "fruits", icon: "🍓" },
    { name: "Eggplant", category: "vegetables", icon: "🍆" },
    { name: "Milk", category: "beverages", icon: "🥛" },
    { name: "Ice Cream", category: "desserts", icon: "🍨" },
    { name: "Taco", category: "snacks", icon: "🌮" },
    { name: "Watermelon", category: "fruits", icon: "🍉" },
    { name: "Pepper", category: "vegetables", icon: "🌶️" },
    { name: "Wine", category: "beverages", icon: "🍷" },
    { name: "Chocolate", category: "desserts", icon: "🍫" },
    { name: "Burrito", category: "snacks", icon: "🌯" },
    { name: "Pineapple", category: "fruits", icon: "🍍" },
    { name: "Cucumber", category: "vegetables", icon: "🥒" },
    { name: "Beer", category: "beverages", icon: "🍺" },
    { name: "Candy", category: "desserts", icon: "🍬" },
    { name: "Sandwich", category: "snacks", icon: "🥪" },
    { name: "Mango", category: "fruits", icon: "🥭" },
    { name: "Lettuce", category: "vegetables", icon: "🥬" },
    { name: "Cocktail", category: "beverages", icon: "🍹" },
    { name: "Lollipop", category: "desserts", icon: "🍭" },
    { name: "Chips", category: "snacks", icon: "🥔" },
    { name: "Peach", category: "fruits", icon: "🍑" },
    { name: "Potato", category: "vegetables", icon: "🥔" },
    { name: "Bubble Tea", category: "beverages", icon: "🧋" },
    { name: "Pie", category: "desserts", icon: "🥧" },
    { name: "Crackers", category: "snacks", icon: "🧈" },
    { name: "Cherry", category: "fruits", icon: "🍒" },
    { name: "Onion", category: "vegetables", icon: "🧅" },
    { name: "Champagne", category: "beverages", icon: "🍾" },
    { name: "Pudding", category: "desserts", icon: "🍮" },
    { name: "Nuts", category: "snacks", icon: "🥜" }
];

const cardGrid = document.querySelector("#cardsGrid");
const filterTabs = document.querySelector("#filterTabs");
const searchInput = document.querySelector("#searchInput");
const resultInfo  =  document.querySelector("#resultInfo");

const categories = ["All", "Fruits","Vegetables","Desserts","Beverages","Snacks"];
let activeCategory = "all";

function renderCards() {
    cardGrid.innerHTML = '';
    const searchText = searchInput.value.toLowerCase();
    cardGrid.innerHTML = "";

    const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchText);
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;

    return matchesSearch && matchesCategory;
});

    if (filteredProducts.length === 0) {
        cardGrid.innerHTML = `<p class="empty">No products found</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
                        <div class="card-icon">${product.icon}</div>
                        <div class="card-name">${product.name}</div>
                        <div class="card-category">${product.category}</div>
                    `;
        cardGrid.append(card);
    });
    resultInfo.textContent = `Showing ${filteredProducts.length} of ${products.length} 50 products`
}
function renderCategories(){
    categories.forEach(category=>{
    const button = document.createElement("button");
    button.className = "tab";
    button.setAttribute("data-category", category.toLowerCase());
    button.textContent = category;
    if(button.dataset.category === "all"){
        button.classList.add('active');
    }
    filterTabs.append(button);
    });
    const buttons = document.querySelectorAll(".tab");
    buttons.forEach(btn=>{
        btn.addEventListener("click",()=>{
            activeCategory = btn.dataset.category;
            buttons.forEach(btn=>btn.classList.remove('active'));
            btn.classList.add('active');
            renderCards();
        })
    })
}
searchInput.addEventListener("input", renderCards);
renderCategories();
renderCards();
