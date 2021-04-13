
export function helloWorld  (req, res)  {

    res.set('Access-Control-Allow-Origin', '*')

    if (req.method === "OPTIONS"){
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    }else{
        res.send({msg:"Hello world!"})
    }

  };