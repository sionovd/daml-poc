'use strict';

// TODO: bring ORM to work with data model
var permits = [
    {
        Id: 12345678,
        Name: "John Smith",
        Address: "Israel, TLV, Azrieli",
        GivenAt: Date.now,
        //ExpiresAt: nil,
    },
]

exports.list_all_permits = function(req, res) {
    // TODO: fetch all permits from DB
    res.json(permits);
}

exports.submit_permit = function(req, res) {
    // TODO: submit permit into database
}

exports.get_permit = function(req, res) {
    // TODO: get permit
}

exports.update_permit = function(req, res) {
    // TODO: update permit
}

exports.delete_permit = function(req, res) {
    // TODO: delete permit
}
