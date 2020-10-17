const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    /* await saveOrphanage(db,  {
        lat: "-23.5827306",
        lng: "-46.5958771",
        name: 'Orfanato Borboletas',
        about: 'Presta assistência para crianças de 0 à 10 anos que se encontram em situação de risco',
        whatsapp: "11 93456-8765",
        images: [
        '/images/orphanage4.jpg',
        '/images/orphanage5.jpg'
        ].toString(),
        instructions: "Máximo 3 pessoas",
        opening_hours: "Das 9 às 15hs",
        open_on_weekends: "1"

    }) */

    //Consult datas
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    //console.log(selectedOrphanages);

    //Consult only one orphage by ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id= "3"');
    //console.log(orphanage);

    //Delete datas
    //console.log(await db.run('DELETE FROM orphanages WHERE id= "4"'));

})