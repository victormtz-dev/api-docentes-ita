import app from './services/server/app'

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
})
