export type Coordinates = {
    lat: number,
    lng: number
}

export type Destination = {
    id: string,
    location: {
        coordinates: Coordinates,
        name: string
    },
    title: string,
    startDate: string,
    endDate: string,
    timezone: string
}

export type Place = {
    placeId?: string
    date: string,
    name: string,
    coordinates: Coordinates | undefined,
    address: string,
    phone: string,
    website: string,
    notes: string
}

export type Itinerary = {
    destination: Destination,
    places: Place[]

}