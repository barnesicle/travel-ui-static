export async function GET(request: Request) {
    const res = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&location=-26.382126355033094,153.0991490827138&key=AIzaSyD07ghI7JVp17zPEURbCnLM7PEpVaFabIw', {
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY,
        },
    })
    const data = await res.json()

    return Response.json({ data })
}