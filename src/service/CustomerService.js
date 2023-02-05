
export class CustomerService {

    getCustomers() {
        return fetch('https://www.primefaces.org/data/customers').then(res => res.json())
    }

    getProductsSmall() {
        return fetch('data/products-small.json').then(res => res.json())
    }

    getMenuItems() {
        return fetch('data/menuItems.json').then(res => res.json())
    }
}

