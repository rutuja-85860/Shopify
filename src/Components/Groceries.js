import { useDispatch } from 'react-redux'
import { addTocart } from '../redux/slice'
export default function Groceries () {   
   
    const data=[
        {
            "id": 16,
            "title": "Apple",
            "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
            "category": "groceries",
            "price": 1.99,
            "discountPercentage": 1.97,
            "rating": 2.96,
            "stock": 9,
            "tags": [
                "fruits"
            ],
            "sku": "QTROUV79",
            "weight": 8,
            "dimensions": {
                "width": 8.29,
                "height": 5.58,
                "depth": 12.41
            },
            "warrantyInformation": "2 year warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Logan Lee",
                    "reviewerEmail": "logan.lee@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Elena Long",
                    "reviewerEmail": "elena.long@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Not as described!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Grayson Coleman",
                    "reviewerEmail": "grayson.coleman@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 44,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "2517819903837",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png"
        },
        {
            "id": 17,
            "title": "Beef Steak",
            "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
            "category": "groceries",
            "price": 12.99,
            "discountPercentage": 17.99,
            "rating": 2.83,
            "stock": 96,
            "tags": [
                "meat"
            ],
            "sku": "BWWA2MSO",
            "weight": 9,
            "dimensions": {
                "width": 23.35,
                "height": 13.48,
                "depth": 26.4
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Ethan Martinez",
                    "reviewerEmail": "ethan.martinez@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Disappointing product!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Owen Fisher",
                    "reviewerEmail": "owen.fisher@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Scarlett Wright",
                    "reviewerEmail": "scarlett.wright@x.dummyjson.com"
                }
            ],
            "returnPolicy": "90 days return policy",
            "minimumOrderQuantity": 21,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "8335515097879",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png"
        },
        {
            "id": 18,
            "title": "Cat Food",
            "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
            "category": "groceries",
            "price": 8.99,
            "discountPercentage": 9.57,
            "rating": 2.88,
            "stock": 13,
            "tags": [
                "pet supplies",
                "cat food"
            ],
            "sku": "C3F8QN6O",
            "weight": 9,
            "dimensions": {
                "width": 15.4,
                "height": 13.97,
                "depth": 25.13
            },
            "warrantyInformation": "3 months warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Mateo Bennett",
                    "reviewerEmail": "mateo.bennett@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Aurora Barnes",
                    "reviewerEmail": "aurora.barnes@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Ellie Stewart",
                    "reviewerEmail": "ellie.stewart@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 48,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "5503491330693",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png"
        },
        {
            "id": 19,
            "title": "Chicken Meat",
            "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
            "category": "groceries",
            "price": 9.99,
            "discountPercentage": 10.46,
            "rating": 4.61,
            "stock": 69,
            "tags": [
                "meat"
            ],
            "sku": "G5YEHW7B",
            "weight": 7,
            "dimensions": {
                "width": 15.96,
                "height": 29.24,
                "depth": 26.25
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Sophia Jones",
                    "reviewerEmail": "sophia.jones@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Maya Reed",
                    "reviewerEmail": "maya.reed@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Harper Turner",
                    "reviewerEmail": "harper.turner@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 46,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "0966223559510",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
                "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png"
        },
        {
            "id": 20,
            "title": "Cooking Oil",
            "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
            "category": "groceries",
            "price": 4.99,
            "discountPercentage": 18.89,
            "rating": 4.01,
            "stock": 22,
            "tags": [
                "cooking essentials"
            ],
            "sku": "Q6ZP1UY8",
            "weight": 8,
            "dimensions": {
                "width": 8.18,
                "height": 27.45,
                "depth": 27.88
            },
            "warrantyInformation": "Lifetime warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Mason Parker",
                    "reviewerEmail": "mason.parker@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Poor quality!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Jonathan Pierce",
                    "reviewerEmail": "jonathan.pierce@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Alexander Hernandez",
                    "reviewerEmail": "alexander.hernandez@x.dummyjson.com"
                }
            ],
            "returnPolicy": "60 days return policy",
            "minimumOrderQuantity": 2,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "6707669443381",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png"
        },
        {
            "id": 21,
            "title": "Cucumber",
            "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
            "category": "groceries",
            "price": 1.49,
            "discountPercentage": 11.44,
            "rating": 4.71,
            "stock": 22,
            "tags": [
                "vegetables"
            ],
            "sku": "6KGF2K6Z",
            "weight": 9,
            "dimensions": {
                "width": 11.04,
                "height": 20.5,
                "depth": 8.18
            },
            "warrantyInformation": "5 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Elijah Hill",
                    "reviewerEmail": "elijah.hill@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Fast shipping!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Liam Garcia",
                    "reviewerEmail": "liam.garcia@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Excellent quality!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Ella Cook",
                    "reviewerEmail": "ella.cook@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 7,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "2597004869708",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png"
        },
        {
            "id": 22,
            "title": "Dog Food",
            "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
            "category": "groceries",
            "price": 10.99,
            "discountPercentage": 18.15,
            "rating": 2.74,
            "stock": 40,
            "tags": [
                "pet supplies",
                "dog food"
            ],
            "sku": "A6QRCH37",
            "weight": 2,
            "dimensions": {
                "width": 29.39,
                "height": 29.77,
                "depth": 20.54
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Highly impressed!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Leo Rivera",
                    "reviewerEmail": "leo.rivera@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Highly recommended!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Alexander Jones",
                    "reviewerEmail": "alexander.jones@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Addison Wright",
                    "reviewerEmail": "addison.wright@x.dummyjson.com"
                }
            ],
            "returnPolicy": "90 days return policy",
            "minimumOrderQuantity": 29,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "7957222289508",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png"
        },
        {
            "id": 23,
            "title": "Eggs",
            "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
            "category": "groceries",
            "price": 2.99,
            "discountPercentage": 5.8,
            "rating": 4.46,
            "stock": 10,
            "tags": [
                "dairy"
            ],
            "sku": "YA617RI7",
            "weight": 4,
            "dimensions": {
                "width": 12.3,
                "height": 10.99,
                "depth": 15.53
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Mateo Perez",
                    "reviewerEmail": "mateo.perez@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Cameron Perez",
                    "reviewerEmail": "cameron.perez@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very happy with my purchase!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Aurora Barnes",
                    "reviewerEmail": "aurora.barnes@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 43,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "7095702028776",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Eggs/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png"
        },
        {
            "id": 24,
            "title": "Fish Steak",
            "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
            "category": "groceries",
            "price": 14.99,
            "discountPercentage": 7,
            "rating": 4.83,
            "stock": 99,
            "tags": [
                "seafood"
            ],
            "sku": "XNIH1MTA",
            "weight": 8,
            "dimensions": {
                "width": 20.14,
                "height": 8.4,
                "depth": 10.01
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 1 month",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Great value for money!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Michael Johnson",
                    "reviewerEmail": "michael.johnson@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Julian Newton",
                    "reviewerEmail": "julian.newton@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Excellent quality!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Lila Hudson",
                    "reviewerEmail": "lila.hudson@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 49,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "4250692197342",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png"
        },
        {
            "id": 25,
            "title": "Green Bell Pepper",
            "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
            "category": "groceries",
            "price": 1.29,
            "discountPercentage": 15.5,
            "rating": 4.28,
            "stock": 89,
            "tags": [
                "vegetables"
            ],
            "sku": "HU7S7VQ0",
            "weight": 7,
            "dimensions": {
                "width": 7.32,
                "height": 14.31,
                "depth": 21.38
            },
            "warrantyInformation": "5 year warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Excellent quality!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Maya Reed",
                    "reviewerEmail": "maya.reed@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Madison Collins",
                    "reviewerEmail": "madison.collins@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Ethan Thompson",
                    "reviewerEmail": "ethan.thompson@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 1,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "7583442707568",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png"
        },
        {
            "id": 26,
            "title": "Green Chili Pepper",
            "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
            "category": "groceries",
            "price": 0.99,
            "discountPercentage": 18.51,
            "rating": 4.43,
            "stock": 8,
            "tags": [
                "vegetables"
            ],
            "sku": "Y4RM3JCB",
            "weight": 2,
            "dimensions": {
                "width": 18.67,
                "height": 21.17,
                "depth": 25.26
            },
            "warrantyInformation": "No warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Disappointing product!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Mateo Bennett",
                    "reviewerEmail": "mateo.bennett@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Very pleased!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Natalie Price",
                    "reviewerEmail": "natalie.price@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very satisfied!",
                    "date": "2024-05-23T08:56:21.620Z",
                    "reviewerName": "Avery Barnes",
                    "reviewerEmail": "avery.barnes@x.dummyjson.com"
                }
            ],
            "returnPolicy": "30 days return policy",
            "minimumOrderQuantity": 43,
            "meta": {
                "createdAt": "2024-05-23T08:56:21.620Z",
                "updatedAt": "2024-05-23T08:56:21.620Z",
                "barcode": "8400326844874",
                "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/1.png"
            ],
            "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png"
        },
       
    ]
    const dispatch = useDispatch()
    const addcart=(data)=>{
    
            dispatch(addTocart(data))
      
      
          }
    return(
    <div className='container'>
            <div className='row'>
    
              {
                  data.map(({id, thumbnail, title,category, price,discountPercentage }) => {
                      return (
    
                          <>
                              <div className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mx-auto m-4 " style={{ width: '25vw',height:'85vh' }}>
                                  <img src={thumbnail}  className="card-img-top" alt="..." />
                                  <hr></hr>
                                  <div className="card-body" >
                                  <p className="card-text" >{category}</p>
                                      <h4 className="card-title" >{title}</h4>
                                     <p className="card-text" >${price}</p>
                                      <p className="card-text" >-{discountPercentage}%</p>
                                      <a href="#" className="btn " style={{backgroundColor:"black",color:"white",width:"7vw",height:"5vh"}} onClick={()=>{addcart({thumbnail,title,price,category,id})}}>Add to cart </a>
                                  </div>
                              </div>
    
                          </>
    
                      )
                  })
    
    
              }
          </div>
      </div>
    
            )
    }