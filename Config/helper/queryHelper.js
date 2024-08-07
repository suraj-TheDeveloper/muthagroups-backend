const Insert = (collection, data, type) => {
    let response;
    if (type == "one") {
        response = collection.insert(data);
    } else {
        response = collection.insertMany(data);
    }
    return response
};

const findData = (collection, where, gets, sort, limit, page) => {
    let response = collection.find(where, gets).sort(sort).limit(limit).skip((page - 1) * limit);
    return response;
}

const findOne = (collection, where) => {
    let response = collection.findOne(where);
    return response;
}

const update = (collection, where, updateData) => {
    let response = collection.findOneAndUpdate(where, updateData);
    return response;
}

const deleteData = (collection, where) => {
    let response = collection.findOneAndDelete(where);
    return response;
}

module.exports = {
    Insert,
    findData,
    findOne,
    update,
    deleteData
}