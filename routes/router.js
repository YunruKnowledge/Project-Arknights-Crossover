



const router = require("express").Router();
const axios = require('axios');
//   Key was revealed to ChatGPT
const api_key = "XFN6hnyTQegupzD2if96SJWXHfoqRFULMdZpY983dpPd3DyLPANjcoi1fmeHC9GK"
const api_server = "https://eu-central-1.aws.data.mongodb-api.com/app/data-qysgs/endpoint/data/v1/action/find"

router.get("/character/:query", async (req,res)=>{

    const lookUp = {
        "name": 1,
        "description": 1,
        "speciality": 1,
        "class": 1,
        "image": 1,
        "skill": 1,
        "star": 1,
        "icon": 1
    }
    const query = {
        "name": {
            // May disable regex later
            "$regex": req.params.query,
            "$options": "i"
        }
    }
    
    try {
        // console.log(wano)
        res.render('index', {
          fav: await fetchData("other", null, {"favicon": 1}),
          character: await fetchData("character", query, lookUp)
        });
    } 
    catch (error) {
        console.error(error);
        res.render('error');
    }
})

async function fetchData(collection, query, lookFor) {
    
    const config = {
        method: 'post',
        url: `${api_server}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': `${api_key}`,
        },
        data: {
            "collection": collection,
            "database": "arknights_crossover",
            "dataSource": "API-Cluster",
            "projection": lookFor,
            "filter": query,
            "limit": 4
        }
    };

    const response = await axios(config);
    const serverData = response.data.documents;
    console.log("Search query - found: " + serverData.length)

    const notFound = [{
        "name": null,
        "description": null,
        "speciality": null,
        "class": null,
        "image": null,
        "skill": null,
        "star": null,
        "icon": null
    }]
    if (serverData.length <= 0) return notFound
    return serverData
} 

module.exports = router;
