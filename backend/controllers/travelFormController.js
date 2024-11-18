const db = require('../databaseConfi/dbconfig');

exports.saveTravelData = (req, res) => {
    const { selectedOption, hotels, routes, flightType } = req.body;

    const sql = `
        INSERT INTO travel_data (selectedOption, flightType, routes, hotels)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            flightType,
            selectedOption,
            JSON.stringify(routes), // Convert routes array to JSON
            JSON.stringify(hotels)  // Convert hotels array to JSON
        ],
        (err, result) => {
            if (err) {
                console.error('Database insertion error:', err);
                res.status(500).send({ error: 'Failed to save travel data' });
            } else {
                res.status(201).send({ message: 'Data saved successfully', result });
            }
        }
    );
};



exports.getTravelData = (req, res) => {
    // let sql = 'SELECT * FROM travel_data';
    let sql ='SELECT * FROM travel_data ORDER BY id DESC LIMIT 1;'
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            res.status(500).send({ error: 'Failed to retrieve travel data' });
        } else {
            // Parse JSON fields if necessary
            const formattedResults = results.map(row => ({
                id: row.id,
                flightType: row.flight_type,
                selectedOption: row.selected_option,
                routes: row.routes ? JSON.parse(row.routes) : [], // Parse routes JSON
                hotels: row.hotels ? JSON.parse(row.hotels) : []  // Parse hotels JSON
            }));
            res.status(200).json(formattedResults); // Send formatted response
        }
    });
};
