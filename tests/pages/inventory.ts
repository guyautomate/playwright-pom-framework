import {Page, Locator, expect} from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly cartIcon: Locator;
    readonly filterBox: Locator;
    readonly inventoryItem: Locator;
    readonly addToCartButton: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.cartIcon = page.locator(".shopping_cart_link");
        this.filterBox = page.locator(".product_sort_container");
        this.inventoryItem = page.locator(".inventory_item");
        this.addToCartButton = page.locator(".btn_inventory");
    }

    async verifyInventoryPage(){
        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
        await expect(this.filterBox).toBeVisible();
        await expect(this.inventoryItem).toBeVisible();
        await expect(this.addToCartButton).toBeVisible();
    }

    async addItemToCart(itemName: string){
        const itemLocator = this.page.locator(`.inventory_item:has-text("${itemName}")`);
        await expect(itemLocator).toBeVisible();
        const addToCartButton = itemLocator.locator(".btn_inventory");
        await addToCartButton.click();
    }

    async navigateToCart(){
        await this.cartIcon.click();
    }

    async verifyCartItemCount(expectedCount: number){
        const cartBadge = this.cartIcon.locator(".shopping_cart_badge");
        await expect(cartBadge).toHaveText(expectedCount.toString());
    }

    async verifyCartItem(itemName: string){
        const cartItemLocator = this.page.locator(`.cart_item:has-text("${itemName}")`);
        await expect(cartItemLocator).toBeVisible();
    }

    async sortItemsBy(option: string){
        await this.filterBox.selectOption(option);
    }

    async verifyItemsSortedBy(option: string){
        const itemNames = await this.inventoryItem.locator(".inventory_item_name").allTextContents();
        const sortedItemNames = [...itemNames].sort();