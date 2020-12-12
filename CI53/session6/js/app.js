//firebase.firestore().collection("users").<ten thao tac>;

//    *create
function addData() {
    //     firebase.firestore().collection('users').add({
    //         name: "someone",
    //         age: "18",
    //         address: "hanoi",
    //         favorite: ['film', 'music']
    //     });
    // }
    // // addData();

    //tu tao ra films neu films ko ton tai
    firebase.firestore().collection('films').add({
        name: "GG",
        duration: "120",
        director: "hieu"
    });
}
// addData();


//   *read
// *read1
// async function readOne(id) {
//     let result = await firebase.firestore().collection('users').doc(id).get();
//     console.log(result.data());
// }
// //firebase.firestore().collection('users').doc(id).get(); tra ve promise
// readOne('B4WqznsBIz04ze4mmYub');



// *readMany

//read all
// async function readAll() {
//     let result = await firebase.firestore().collection('users').get();
//     console.log(result.docs);
//     result.docs.forEach(function(doc) {
//         console.log(doc.data());
//         // console.log(doc.id, doc.data()); lay ra dc id va data

//     });

//     // for(let doc of result.docs) {

//     // }  forEach ko break ddc, con for of break dc
//     //ko nen dung async vs forEach
// }
// readAll();


//read by condition
// async function readByCondition() {
//     let result = await firebase.firestore()
//         .collection('users').where('age', '>=', 11)
//         .get();

//     console.log(result);
//     result.docs.forEach(function(doc) {
//         console.log(doc.id, doc.data());
//     });
// }
// readByCondition();



//update
// function updateData(id) {
//     firebase.firestore()
//         .collection('users')
//         .doc(id)
//         .update({
//             age: 30,
//             address: 'TB'
//         });
// }
// updateData('xWLnvfAKHeGfpbA04brt');


//delete
// function deleteData(id) {
//     firebase.firestore()
//         .collection('users')
//         .doc(id).delete();
// }

// deleteData('xWLnvfAKHeGfpbA04brt');