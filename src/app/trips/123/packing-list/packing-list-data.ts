import {UserPackingList} from "@/app/user/[id]/packing-list/packing-list-types";

export const packingListData : UserPackingList[] = [
    {
        user: {
            name: 'Luke Barnes',
            email: 'lukedbarnes@gmail.com'
        },
        bags: [
            {
                id: 'l-1',
                name: 'Self',
                items: [
                    {
                        id: 'l-1-1',
                        name: 'Phone',
                        quantity: 1
                    },
                    {
                        id: 'l-1-2',
                        name: 'Wallet',
                        quantity: 1
                    },
                ]
            },
            {
                id: 'l-2',
                name: 'Carry On',
                items: [
                    {
                        id: 'l-2-1',
                        name: 'Spare Underwear',
                        quantity: 1
                    },
                    {
                        id: 'l-2-2',
                        name: 'Spare Pants',
                        quantity: 1
                    },
                    {
                        id: 'l-2-3',
                        name: 'Spare Shirt',
                        quantity: 1
                    }
                ]
            },
            {
                id: 'l-3',
                name: 'Checked 1',
                items: [
                    {
                        id: 'l-3-1',
                        name: 'Underwear',
                        quantity: 7
                    },
                    {
                        id: 'l-3-2',
                        name: 'Socks',
                        quantity: 7
                    },
                    {
                        id: 'l-3-3',
                        name: 'T-Shirts',
                        quantity: 7
                    },
                    {
                        id: 'l-3-5',
                        name: 'Shorts',
                        quantity: 3
                    },
                    {
                        id: 'l-3-6',
                        name: 'Pants',
                        quantity: 2
                    },
                    {
                        id: 'l-3-7',
                        name: 'Shoes',
                        quantity: 1
                    },
                    {
                        id: 'l-3-8',
                        name: 'Toothbrush',
                        quantity: 1
                    },
                    {
                        id: 'l-3-9',
                        name: 'Shampoo',
                        quantity: 1
                    },
                    {
                        id: 'l-3-10',
                        name: 'Conditioner',
                        quantity: 1
                    },
                    {
                        id: 'l-3-11',
                        name: 'Soap',
                        quantity: 1
                    },
                    {
                        id: 'l-3-12',
                        name: 'Swimmers',
                        quantity: 1
                    },
                    {
                        id: 'l-3-13',
                        name: 'Hat',
                        quantity: 1
                    },
                    {
                        id: 'l-3-14',
                        name: 'Sunglasses',
                        quantity: 1
                    },
                ]
            },
            {
                id: 'l-4',
                name: 'Personal Item',
                items: [
                    {
                        id: 'l-4-1',
                        name: 'USB-C Charger',
                        quantity: 1
                    },
                    {
                        id: 'l-4-2',
                        name: 'Laptop',
                        quantity: 1
                    },
                    {
                        id: 'l-4-3',
                        name: 'Laptop Charger',
                        quantity: 1
                    },
                    {
                        id: 'l-4-4',
                        name: 'Headphones',
                        quantity: 1
                    },
                ]
            }
        ],
        /*unassignedItems: [
            {
                name: 'Passport',
                quantity: 1
            },


            {
                name: 'Towel',
                quantity: 1
            },

        ]*/
    },
    {
        user: {
            name: 'Alison Barnes',
            email: 'alisonjeanbarnes@gmail.com'
        },
        bags: [
            {
                id: 'a-1',
                name: 'Self',
                items: [
                    {
                        id: 'a-1-1',
                        name: 'Phone',
                        quantity: 1
                    },
                    {
                        id: 'a-1-2',
                        name: 'Purse',
                        quantity: 1
                    },
                ]
            },
            {
                id: 'a-2',
                name: 'Carry On',
                items: [
                    {
                        id: 'a-2-1',
                        name: 'Spare Underwear',
                        quantity: 1
                    },
                    {
                        id: 'a-2-2',
                        name: 'Spare Pants',
                        quantity: 1
                    },
                    {
                        id: 'a-2-3',
                        name: 'Spare Shirt',
                        quantity: 1
                    }
                ]
            },
            {
                id: 'a-3',
                name: 'Checked 1',
                items: [
                    {
                        id: 'a-3-1',
                        name: 'Underwear',
                        quantity: 7
                    },
                    {
                        id: 'a-3-2',
                        name: 'Socks',
                        quantity: 7
                    },
                ]
            },
            {
                id: 'a-4',
                name: 'Personal Item',
                items: [
                    {
                        id: 'a-4-1',
                        name: 'USB-C Charger',
                        quantity: 1
                    },
                    {
                        id: 'a-4-2',
                        name: 'Laptop',
                        quantity: 1
                    },
                    {
                        id: 'a-4-3',
                        name: 'Laptop Charger',
                        quantity: 1
                    },
                    {
                        id: 'a-4-4',
                        name: 'Headphones',
                        quantity: 1
                    },
                ]
            }
        ],
    }
];