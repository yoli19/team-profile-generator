const generateManager = manager => {
    return `
    <section class="managerCard">
        <h2>${manager.name}</h2>
        <p>${manager.id}<p>
        <p>${manager.email}<p>
        <p>${manager.role}<p>
        <p>${manager.officeNumber}<p>
    </section>
    `;
};

const generateEngineer = engineer => {
    return `
    <section class="engineerCard">
        <h2>${engineer.name}</h2>
        <p>${engineer.id}<p>
        <p>${engineer.email}<p>
        <p>${engineer.role}<p>
        <p>${engineer.github}<p>
    </section>
    `;
};

const generateIntern = intern => {
    return `
    <section class="internCard">
        <h2>${intern.name}</h2>
        <p>${intern.id}<p>
        <p>${intern.email}<p>
        <p>${intern.role}<p>
        <p>${intern.school}<p>
    </section>
    `;
};

export default employeeData => {
    const { manager, engineer, intern} = employeeData
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        ${generateManager(manager)}
        ${generateEngineer(engineer)}
        ${generateIntern(intern)}
    </body>
    </html>
    `;
};