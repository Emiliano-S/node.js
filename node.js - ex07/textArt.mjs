import figlet from "figlet";

figlet.text('Develhope', {
    font: 'Big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data){
    if(err){
        console.log('Something went wrong...');
        console.dir(err)
        return;
    }
    console.log(data);
})