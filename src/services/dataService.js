var catalog = [
    {
        id: "product 1",
        title: "Apple",
        image: 'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=',
        price: 12.99,
        category: "Fruit",
        stock: 34,
        minimum: 1
    },
    {
        id: "product 2",
        title: "Orange",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg",
        price: 5.99,
        category: "Fruit",
        stock: 22,
        minimum: 2
    }
]

class DataService 
{
    getCatalog() 
    {
        return catalog;
    }

    saveItem() 
    {

    }

    saveOrder() 
    {

    }
}

export default DataService;