const radioName = "env";

function buildEnvListEntry(data){
	return `
	<div>
		<label>
			<input type="radio" name="${radioName}" value="${data.envId}"> 
			<img src="/img/${data.imgPath}"> ${data.name} 
		</label>
		<span class="desc"> ${data.description} </span>
	</div>`;
}


$.post("/envlist", {}, (data)=>{
	$.each(data, (idx, elem)=>{
		console.dir(elem);
		$("#envs").append(buildEnvListEntry(elem));
	});
}).fail((jqXHR, status, err)=>{
	console.error(status);
	throw err;
});