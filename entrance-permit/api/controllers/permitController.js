const permits = [
    {
        Id: 12345678,
        Name: "John Smith",
        Address: "Israel, TLV, Azrieli",
        GivenAt: Date.now,
        //ExpiresAt: nil,
    },
]

export const listAllPermits = (req, res) => {
    // TODO: fetch all permits from DB
    res.json(permits);
}

export const submitPermit = (req, res) => {
    // TODO: submit permit into database
}

export const getPermit = (req, res) => {
    // TODO: get permit
}

export const updatePermit = (req, res) => {
    // TODO: update permit
}

export const deletePermit = (req, res) => {
    // TODO: delete permit
}
