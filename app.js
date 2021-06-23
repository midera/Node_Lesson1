const path = require("path");
const fs = require("fs");
const path1800 = path.join(__dirname, '1800');
const path2000 = path.join(__dirname, '2000');

// fs.mkdir(`${__dirname}/1800`, {recursive:true},(err) =>{
//     console.log(err);
// });
// fs.mkdir(`${__dirname}/2000`, {recursive:true},(err) =>{
//     console.log(err);
// });
// fs.readdir(path1800, (e, files) => {
//     if (e){
//         console.log(e);
//         return;
//     }
//     files.forEach(file => {
//         let pathDir18 = path.join(path1800,file);
//         fs.rename(pathDir18,path.join(path2000,file),(err)=>{
//             if (err) {
//                 console.log(err);
//                 return err;
//             }
//         });
//     });
// });
// fs.readdir(path2000, ((err,file) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     file.forEach(file => {
//         let pathDir20 = path.join(path2000,file);
//         fs.rename(pathDir20,path.join(path1800,file),err=>{
//             if (err) {
//                 console.log(err);
//                 return err;
//             }
//         });
//     });
// }));
const pathMale = path.join(__dirname, 'male');
const pathFemale = path.join(__dirname, 'female');
// fs.mkdir(`${__dirname}/male`, {recursive:true},(err) =>{
//     console.log(err);
// });
// fs.mkdir(`${__dirname}/female`, {recursive:true},(err) =>{
//     console.log(err);
// });
const sortGenders = (pathDir) => {
    fs.readdir(pathDir, (err, files) => {
        files.forEach(fileName => {
            fs.readFile(path.join(pathDir, fileName), (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                const gender = JSON.parse(data.toString()).gender;
                if (gender === "male") {
                    fs.rename(path.join(pathDir, fileName), path.join(pathMale, fileName), err => {
                        if(err) {
                            console.log(err);
                            return err;
                        }
                    })
                    return;
                }
                fs.rename(path.join(pathDir, fileName), path.join(pathFemale, fileName), err => {
                    if(err) {
                        console.log(err);
                    }
                });
            });
        });
    });
};
sortGenders(path1800);
sortGenders(path2000);