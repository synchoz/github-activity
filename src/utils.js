function PrintEvents(obj) {
    obj.map((item) => {
        console.log('');
        if(item.type == "IssuesEvent") {
            console.log(`-- ${item.payload.action} an issue in repo ${item.repo.name} at ${item.created_at}`);
        } else if(item.type == "PushEvent") {
            console.log(`-- Pushed ${item.payload.commits.length} commits to repo ${item.repo.name} at ${item.created_at}`);
        } else if(item.type == "WatchEvent" && item.payload.action == "started") {
            console.log(`-- Starred repo ${item.repo.name} at ${item.created_at}`);
        } else if(item.type == "CreateEvent") {
            console.log(`-- ${item.payload.ref_type} was created ${item.repo.name} at ${item.created_at}`)
        }
    })
}

module.exports = {PrintEvents};