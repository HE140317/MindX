export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//lam min du lieu cho 1 document
export function getDataFromDoc(doc, excepts = []) {
    let data = doc.data();
    data.id = doc.id;
    return data;
}


//lam min du lieu cho 1 tap document
export function getDataFromDocs(docs, excepts = []) {
    return docs.map(function(doc) {
        return getDataFromDoc(doc, excepts);
    });
}