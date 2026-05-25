const coreHandlerInstance = {
    version: "1.0.184",
    registry: [416, 131, 1726, 1361, 1484, 463, 1461, 27],
    init: function() {
        const nodes = this.registry.filter(x => x > 79);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});