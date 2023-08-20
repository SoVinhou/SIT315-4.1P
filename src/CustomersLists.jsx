import{ faker } from "@faker-js/faker";

const CustomersLists = [
    {
        "key": 0,
        "avatar": faker.image.urlLoremFlickr({ category: 'people' }),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p style={{fontSize: "50px"}}> <img src = {require("./images/star.png")} alt="logo" width={60} height={50} /> 
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} />
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} />
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} />  </p>
    },
    {
        "key": 1,
        "avatar": faker.image.urlLoremFlickr({ category: 'people' }),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p style={{fontSize: "50px"}}> <img src = {require("./images/star.png")} alt="logo" width={60} height={50} /> 
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} />
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} />  </p>
    },
    {
        "key": 2,
        "avatar": faker.image.urlLoremFlickr({ category: 'people' }),
        "name": faker.person.firstName(),
        "position": faker.person.jobTitle(),
        "rating": <p style={{fontSize: "50px"}}> <img src = {require("./images/star.png")} alt="logo" width={60} height={50} /> 
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} />
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} /> 
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} /> 
                                                 <img src = {require("./images/star.png")} alt="logo" width={60} height={50} />  </p>
    },

]

export default CustomersLists;