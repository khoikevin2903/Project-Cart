
var initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        image: 'https://stcv4.hnammobile.com//downloads/8/u_10168679.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 20,
        rating: 4
    },
    {
        id: 3,
        name: 'Iphone 10 Plus',
        image: 'https://www.dhresource.com/0x0/f2/albu/g8/M00/4E/F3/rBVaVF2a0MKABbDRAAWisAF1R64016.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1500,
        inventory: 30,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;