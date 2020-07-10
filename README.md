## Server API

### Get hotel by hotel ID
  * GET `/api/hotels/:hotelId`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "hotelId": "{
        type: Number,
        unique: true
      }",
      "hotelName": "String",
      "nightlyPrice": "Number",
      "cleaningPrice": "Number",
      "averageRating": "Number",
      "numberReviews": "Number",
      "maxCapacity": "Number",
      "hotelCity": "String",
      "hotelState": "String",
      "hotelCountry": "String",
      "hotelBookings": [
        {
          "bookingId": "Number",
          "checkIn": "Date",
          "checkOut": "Date"
        },
        {
          "bookingId": "Number",
          "checkIn": "Date",
          "checkOut": "Date"
        }
      ]
    }
```

### Get booking info by booking id
  * GET `/api/bookings/:bookingId/`

**Success Status Code:** `201`

**Path Parameters:**
  * `bookingId` bookingId

**Request Body**: Expects JSON with the following keys.

```json
    {
      "bookingId": "Number",
      "bookingHotelId": "String",
      "bookingService": "String",
      "adults": "Number",
      "children": "Number",
      "checkIn": "Date",
      "checkOut": "Date",
      "nightlyPrice": "Number",
      "cleaningPrice": "Number",
      "hotelId": "Number",
      "hotelCity": "String",
      "hotelState": "String",
      "hotelCountry": "String"
    }
```

### Add new booking to a hotel
  * POST `/api/hotels/:hotelId/`

**Success Status Code:** `202`

**Path Parameters:**
  * `hotelId` hotel id

**Request Body**: Expects JSON with the following keys.

```json
    {
      "bookingId": "Number",
      "bookingHotelId": "String",
      "bookingService": "String",
      "adults": "Number",
      "children": "Number",
      "checkIn": "Date",
      "checkOut": "Date"
    }
```


### Update booking info
  * PATCH `/api/hotels/:hotelId/`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `203`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "bookingId": "Number",
      "adults": "Number",
      "children": "Number",
      "checkIn": "Date",
      "checkOut": "Date"
    }
```

### Delete restaurant
  * DELETE `/api/hotels/:hotelId/`

**Path Parameters:**
  * `hotelId` hotel id

**Success Status Code:** `204`
