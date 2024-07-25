export type BagItem = {
    id: string,
    name: string,
    quantity: number,
    editMode?: boolean
}

export type Bag = {
    id: string,
    name: string,
    items: BagItem[],
    editMode?: boolean
}

export type BagsUser = {
    name: string,
    email: string
}

export type UserPackingList = {
    user: BagsUser,
    bags: Bag[]
}

