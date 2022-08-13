const ContactService = require("../services/contact.service")
const ApiError = require("../utils/api-error")
const MongoDB = require("../utils/mongodb.util")


exports.findAll = async (req, res, next) => {
    let documents = []
    try {
        const contactService = new ContactService(MongoDB.client)
        const name = req.query;
        if (name) documents = await contactService.findByName(name);
        else documents = await contactService.find({});
    } catch (error) {
        return next(new ApiError(500, `An error occurrend while retrieving the contacts `))
    }
    return res.send(documents)
}
exports.findOne = async (req, res, next) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.findById(req.params?.id);
        console.log(document)
        if (document === null) return next(new ApiError(404, "Contact not found !"))
        return res.send(document)
    } catch (error) {
        return next(new ApiError(500, `Error occurrend contact with id=${req.params?.id} !`))
    }
}
exports.findAllFavorite = async (req, res, next) => {
    try {
        const contactService = new ContactService(MongoDB.client)
        const documents = await contactService.findFavorite()
        return res.send(documents)
    } catch (error) {
        return next(new ApiError(500, `An error occurred while retrieving favorite contacts !`))
    }
}
exports.create = async (req, res, next) => {
    if (!req.body?.name) return next(new ApiError(400, "Name can not be empty !"))

    try {
        const contactService = new ContactService(MongoDB.client)
        const document = await contactService.create(req.body)
        return res.send(document)
    } catch (error) {
        return next(new ApiError(500, `An error occurrend while creating the contact`))
    }
}
exports.update = async (req, res, next) => {
    if (Object.keys(req.body).length === 0)
        return next(new ApiError(400, "Data to update can not be empty !"))

    try {
        const contactService = new ContactService(MongoDB.client)
        const document = await contactService.update(req.params?.id, req.body)
        if (document === null) return next(new ApiError(404, "Contact not found !"))
        return res.send({ message: "Contact was update succcessfully" })
    } catch (error) {
        return next(new ApiError(500, `Error update contact with id=${req.params?.id}`))
    }
}
exports.deleteAll = async (req, res, next) => {
    try {
        const contactService = new ContactService(MongoDB.client)
        const count = await contactService.deleteAll()
        return res.send({
            message: `${count} contacts were deleted succussfully !`
        })
    } catch (error) {
        return next(new ApiError(500, `An error occurred while removing all contacts`))
    }
}
exports.delete = async (req, res, next) => {
    try {
        const contactService = new ContactService(MongoDB.client)
        const document = await contactService.delete(req.params?.id)
        if (document === null) return next(new ApiError(404, "Contact not found !"))
        return res.send({
            message: `Contacts were deleted succussfully !`
        })
    } catch (error) {
        return next(new ApiError(500, `Could not delete contact with id=${req.params?.id} !`, error))
    }
}