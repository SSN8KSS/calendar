## Server API

### Get hotel by hotel ID
  * GET `/api/hotels/:hotelId`

**Path Parameters:**
  * `hotelId` hotel id
  * `bookingId` booking id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "hotelId": "{
        type: Number,
        unique: true
      }",
      "hotelName": "String",
      "hotelBrand": "String",
      "hotelPrices": [
        {
          "hotelPriceID": "{
            type: Number,
            unique: true
          }",
          "hotelPriceBookingService": "String", // expedia vs. travelocity
          "pricePerNight": "Number",
          "priceAndTaxes": "Number",
          "totalStay": "Number"
        }
      ], // multiple prices based on booking service
      "hotelCity": "String",
      "hotelCoordinates": "String", // use Google Maps API to calculate distance
      "roomsTotal": "Number",
      "sponsored": "Boolean",
      "hotelReviews": "Number",

      "hotelBookings": {
        "bookingId": "{
          type: Number,
          unique: true
        }",
        "checkInDate": "Date",
        "checkOutDate": "Date",
        "guests: "{
          rooms: Number,
          adults: Number,
          children: "{
            [
              {
                childId: {
                  type: Number,
                  unique: true
                },
                childAge: Number d d
              }
            ]
          }", // not sure how to handle counting number of children here - either query or add as separate field?
        }
      }
      "dateAvailability": {
        "dateId": "{
          type: Number,
          unique: true
        }",
        "date": "Date",
        "available": "boolean"
      }
      "hotelAlbum": [
        {
          "photoId": "{
            type: Number,
            unique: true
          }",
          "photoName": "String",
          "photoUrl": "String"
        }
      ],
      "hotelDeals": [
        {
          "freeCancellation": "boolean",
          "reserveNowpayAtStay": "boolean",
          "specialOffers": "boolean"
        }
      ],
      "covid19Measures": "boolean",
      "popularServices": [
        {
          "5Stars": "boolean",
          "airConditioning": "boolean",
          "4StarsUp": "boolean",
          "casino": "boolean"
        }
      ],
      "propertyTypes": [{
        "hotels": "boolean",
        "resorts": "boolean",
        "motels": "boolean",
        "allInclusives": "boolean",
        "condos": "boolean",
        "hotels": "boolean",
        "specialtyLodgings": "boolean"
      }
      ],
      "amenities": [
        "freeWifi": "boolean",
        "breakfastIncluded": "boolean",
        "pool": "boolean",
        "freeParking": "boolean"
      ],
      "distanceFrom": [
        "siteID": "{
          type: Number,
          unique: true
        }",
        "siteName": "String",
        "siteCoordinates": "String",
        "distanceFromHotel": "Number"
      ], // use TripAdvisor API to get list of main attractions/site -> use coordinates to calculate distance
      "neighborhoods": [
        "neighborhoodID": "{
          type: Number,
          unique: true
        }",
        "neighborhoodName": "String",
        "foundInNeighborhood": "boolean"
      ],
      "travelerRating": "Number",
      "hotelClass": "Number",
      "style": "String"
    }
```

### Get all hotels info by city
  * GET `/api/hotels/city`

**Success Status Code:** `201`

**Path Parameters:**
  * `city` city name

**Request Body**: Expects JSON with the following keys.

```json
    {
      "hotels": [{
        // single hotel JSON object
      }
      "hotelClass": [
        "5Stars": "Number",
        "4Stars": "Number",
        "3Stars": "Number",
        "2Stars": "Number",
        "1Stars": "Number"
      ],
      "travelerRating": [
        "5Stars": "Number",
        "4StarsUp": "Number",
        "3StarsUp": "Number",
        "2StarsUp": "Number",
        "1StarsUp": "Number"
      ],
      "style": [
        "budget"
        "midRange"
        "luxury"
        "familyFriendly"
        "business"
        "modern"
        "romantic"
      ]
    }
```

### Add restaurant
  * POST `/api/hotels/:hotelId/:bookingId`

**Success Status Code:** `202`

**Path Parameters:**
  * `hotelId` hotel id
  * `bookingId` booking id

**Request Body**: Expects JSON with the following keys.

```json
    "hotelBooking": {
        "bookingId": "{
          type: Number,
          unique: true
        }",
        "checkInDate": "Date",
        "checkOutDate": "Date",
        "guests": "{
          rooms: Number,
          adults: Number,
          children: "{
            [
              {
                "childId": "{
                  type: Number,
                  unique: true
                }",
                "childAge": "Number"
              }
            ]
          }" // can be multiple children
        }"
      }
```


### Update booking info
  * PATCH `/api/hotels/:hotelId/booking`

**Path Parameters:**
  * `hotelId` hotel id
  * `bookingId` booking id

**Success Status Code:** `203`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    "hotelBooking": {
        "bookingId": "{
          type: Number,
          unique: true
        }",
        "checkInDate": "Date",
        "checkOutDate": "Date",
        "guests": "{
          rooms: Number,
          adults: Number,
          children: "{
            [
              {
                "childId": "{
                  type: Number,
                  unique: true
                }",
                "childAge": "Number"
              }
            ] // can be multiple children
          }"
        }"
      }
```

### Delete restaurant
  * DELETE `/api/hotels/:hotelId/:bookingId`

**Path Parameters:**
  * `hotelId` hotel id
  * `bookingId` booking id

**Success Status Code:** `204`
