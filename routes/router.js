



const router = require("express").Router();
const axios = require('axios');
//   Key was revealed to ChatGPT
const api_key = "XFN6hnyTQegupzD2if96SJWXHfoqRFULMdZpY983dpPd3DyLPANjcoi1fmeHC9GK"
const api_server = "https://eu-central-1.aws.data.mongodb-api.com/app/data-qysgs/endpoint/data/v1/action/find"

async function fetchData(collection, query, lookFor, limit = null) {
    
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
            "limit": limit
        }
    };

    const response = await axios(config);
    const serverData = response.data.documents;
    console.log(`Collection: ${collection} | METHOD: ${config.method} | Objects found: ${serverData.length} | Limit: ${limit} | Projections: ${JSON.stringify(lookFor)} | Query: ${JSON.stringify(query)}`)
    // console.log(serverData)

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
};

// routing
router.get("/character/:query", async (req,res)=>{

    const lookUp = {
        "name": 1,
        "description": 1,
        "speciality": 1,
        "class": 1,
        "image": 1,
        "skill": 1,
        "star": 1
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
          logo: await fetchData("other", {"_id": {"$oid": "641b037abca27907730374a5"}}, {"logo": 1}, 1),
          fav: await fetchData("other", {"_id": {"$oid": "63ff4b0b973764e06c435c81"}}, {"favicon": 1}, 1),
          btn: await fetchData("other", {"_id": {"$oid": "6401d35168dff4e1b30e0bfd"}}, {"button": 1}, 1),
          tabImg: await fetchData("other", {"_id": {"$oid": "641af63fbca27907730374a3"}}, {"tab": 1}, 1),
          classImage: await fetchData("other", {"_id": {"$oid": "641af760bca27907730374a4"}}, {"classIcon": 1}, 1),
          icon: await fetchData("character", null, {"image": 1, "name": 1}),
          character: await fetchData("character", query, lookUp, 1)
        });
    } 
    catch (error) {
        console.error(error);
        res.render("error");
    }
});

router.get("/:url404", async (req,res)=>{
    try {
        res.render("404error", {
            fav: await fetchData("other", {"_id": {"$oid": "63ff4b0b973764e06c435c81"}}, {"favicon": 1}, 1),
            url: req.params.url404
        })
    }
    catch {
        res.render("error")
    }
});

module.exports = router;
