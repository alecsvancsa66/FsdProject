import { Datastore } from '@google-cloud/datastore';

const datastore = new Datastore({
    projectId: 'fsdproject-310513',
    keyFilename: 'fsdproject-key.json'
});

const kindName = 'user-log';

export async function helloWorld  (req, res)  {


    const query = datastore.createQuery(kindName);
    const [tasks] = await datastore.runQuery(query);
    console.log('Tasks:');
    for (const task of tasks) {
      const taskKey = task[datastore.KEY];
      console.log(taskKey.id, task);
    }
    
    res.set('Access-Control-Allow-Origin', '*')

    if (req.method === "OPTIONS"){
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Allow-Headers', 'Content-Type');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
    }else{
        res.send(tasks);
    }

  };

 export function saveLog (req, res) {
    let uid = req.query.uid || req.body.uid || 0;
    let title = req.body.title || '';
    let description = req.body.description || '';    
    datastore.save({
            key: datastore.key(kindName),
            data: {
                title: title,
                description: description,
                uid: datastore.int(uid),
                time_create: datastore.int(Math.floor(new Date().getTime()/1000))
            }
        })
        .catch(err => {
            console.error('ERROR:', err);
            res.status(200).send(err);
            return;
        });    res.status(200).send({uid,title,description});
};