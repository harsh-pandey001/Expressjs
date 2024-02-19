

const Contact =
    mongoose.model("Contact", contactSchema);
 
const app = express();
 
app.set("view engine", "ejs");
 
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.use(express.static(__dirname + '/public'));
 
app.get("/contact",
    function (req, res) {
        res.render("contact");
    });
 
app.post("/contact",
    function (req, res) {
        console.log(req.body.email);
        const contact = new Contact({
            email: req.body.email,
            query: req.body.query,
        });
        contact.save(function (err) {
            if (err) {
                throw err;
            } else {
                const User = mongoose.model("User", userSchema);
                res.render("contact");
            }
        });
    });
 
app.listen(3000,
    function () {
        console.log("App is running on Port 3000");
    });