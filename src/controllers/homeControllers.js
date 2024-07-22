
const getSample = (req, res) => {
    res.render("sample.ejs");
}

const getTest = (req, res) => {
    res.send('cong hoa xa hoi chu nghia viet nam')
}

module.exports = {
    getSample,
    getTest
}