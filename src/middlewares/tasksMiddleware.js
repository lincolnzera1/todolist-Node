const validateTaskBody = (request, response, next) => {
    const body = request.body;

    if(body.title === ""){
        return response.status(400).json({
            message: "The title can't be empty."
        })
    }

    if(!body.title){
        return response.status(400).json({
            message: "The field 'title' is required.."
        })
    }    

    next();
}

const validateDeleteId = async (request, response, next) => {
    console.log(request.params)
    const body = request.params;
    if(!body.id){
        return response.status(400).json({
            message: "The field 'id' is required."
        })
    }

    if(body.id === ''){
        return response.status(400).json({
            message: "The field id can't be empty."
        })
    }

    next();
}

const validateUpdate = (request, response, next) => {
    const body = request.body;

    if(body.title === ""){
        return response.status(400).json({
            message: "The field title can't be empty."
        })
    }

    if(!body.title){
        return response.status(400).json({
            message: "The field 'title' is required."
        })
    }

    next();
}

module.exports = {
    validateTaskBody,
    validateDeleteId,
    validateUpdate
}