var bla;

if(typeof(sortOrder) != "boolean"){
    items;
}
filtered.sort(function (a, b) {
    if(sortOrder == true){
        return (CustomOrder(a.status) > CustomOrder(b.status) ? 1 : -1);
    }
    else if(sortOrder == false){
        return (CustomOrder(a.status) < CustomOrder(b.status) ? 1 : -1);
    }
});

