let database = {
    db: null,
    create: () => {
        this.db = window.openDatabase("COMP1661.db", "1.0.0.1", "COMP1661", 1000000,
            (db) => {
                console.log(`Created database ${db}`);
            }
        );
        this.db.transaction(transaction => {
            transaction.executeSql(``,
                [],
                (trans, result) => {

                }, (trans, error) => {

                });
        }, error => {
            console.log(`something bad happen: ${error}`);
        }, () => {
            console.log(`The db've been created.`);
        });
    }
};
