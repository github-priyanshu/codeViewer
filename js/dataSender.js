
try{var whois=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","An..");}catch{}

send(decodeURI(srh))

function send(what,who=whois){
	var frame=document.createElement("iframe");
	frame.classList.add("dataSender");
	document.body.insertAdjacentElement("afterbegin",frame);
	frame.contentWindow.document.body.innerHTML=`
<form action="https://docs.google.com/forms/d/e/1FAIpQLSc2ShdzJCIH1ZH5vWC3Z_Uld1GIBw65oAw-iv6Ex7tavsdo4w/formResponse"><input name="entry.609848847" value="${whois}"><input name="entry.707371315" value="${what}"><button>sned</button></form>`;
	frame.contentWindow.document.querySelector("button").click();
}