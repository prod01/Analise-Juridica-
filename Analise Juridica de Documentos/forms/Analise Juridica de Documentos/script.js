function showCamera(param) { 
	JSInterface.showCamera(param); 
}
//####################################################################################################
function onload(){
	tipo()
}
//####################################################################################################
function setSelectedZoomItem(selectedItem) {
console.log("entrou setselectzoom")
	if (selectedItem.inputId == "CENTRO_DE_CUSTO") {
		//console.log("entrou setselectzoom if")
		//setZoomData("RESP_CENTRO_DE_CUSTO",
				//selectedItem["NOME"]);
		
		//document.getElementById("RESP_CENTRO_DE_CUSTO").value = selectedItem["NOME"]
		
	}
	if (selectedItem.inputId == "N_CONTRATO_ADTIVOS") {
		//console.log("entrou setselectzoom if")
		//setZoomData("RESP_CENTRO_DE_CUSTO",
			//selectedItem["NOME"]);
	
		document.getElementById("RAZAO_SOCIAL_ADTIVOS").value = selectedItem["NOMEFANTASIA"]
	}
	if (selectedItem.inputId == "N_CONTRATO_RESCISAO") {
		//console.log("entrou setselectzoom if")
		//setZoomData("RESP_CENTRO_DE_CUSTO",
			//selectedItem["NOME"]);
	
		document.getElementById("RAZAO_SOCIAL_RESCISAO").value = selectedItem["NOMEFANTASIA"]
	}
	if (selectedItem.inputId == "NUMERO_DO_CONTRATO_INTE") {
		//console.log("entrou setselectzoom if")
		//setZoomData("RESP_CENTRO_DE_CUSTO",
			//selectedItem["NOME"]);
	
		document.getElementById("RAZAO_SOCIAL").value = selectedItem["NOMEFANTASIA"]
	}
	
	
}
//####################################################################################################
function setZoomData(instance, value) {
	window[instance].setValue(value);
}
//#####################################################################################################
function tipo(){
	console.log("function tipo");
	
	var tipoSolicitacao = document.getElementById("TIPO_SOLICITACAO").value
	console.log("tipoSolicitacao" + tipoSolicitacao );
	if (tipoSolicitacao == "VAZIO"){
		console.log("tipoSolicitacao VAZIO" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', true);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', true);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "none"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "block"
		document.getElementById("OUTROS").parentNode.style.display = "block"
		document.getElementById("DATA_RECIMENTO").parentNode.style.display = "none"

		
		
	}
	if (tipoSolicitacao == "CONTRATO"){
		console.log("tipoSolicitacao CONTRATO" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', true);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "none"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "block"
		document.getElementById("OUTROS").parentNode.style.display = "block"
		document.getElementById("DATA_RECIMENTO").parentNode.style.display = "none"
		
		
	}
	if (tipoSolicitacao == "ADTIVO"){
		console.log("tipoSolicitacao ADTIVO" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', false);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "block"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "none"
		document.getElementById("OUTROS").parentNode.style.display = "block"
		document.getElementById("DATA_RECIMENTO").parentNode.style.display = "none"
		
		
	}
	if (tipoSolicitacao == "RECISAO"){
		console.log("tipoSolicitacao RECISAO" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', false);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "block"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "none"
		document.getElementById("OUTROS").parentNode.style.display = "block"
		document.getElementById("DATA_RECIMENTO").parentNode.style.display = "none"

		
	}
	if (tipoSolicitacao == "NOTIFICACAO"){
		console.log("tipoSolicitacao NOTIFICACAO" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', true);
		$('#NUMERO_DO_CONTRATO').prop('disabled', true);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "none"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "block"
		document.getElementById("OUTROS").parentNode.style.display = "none"
		document.getElementById("DATA_RECIMENTO").parentNode.style.display = "block"
		
		
	}
	if (tipoSolicitacao == "OUTROS"){
		console.log("tipoSolicitacao OUTROS" + tipoSolicitacao );
		$('#OUTROS').prop('disabled', false);
		$('#NUMERO_DO_CONTRATO').prop('disabled', true);
		$('#ANEXOS_CONTRATO_ORIGEM').prop('disabled', false);
		
		document.getElementById("NUMERO_DO_CONTRATO").parentNode.style.display = "none"
		document.getElementById("NUMERO_DO_CONTRATO_FUNC").parentNode.style.display = "block"
		document.getElementById("OUTROS").parentNode.style.display = "block"
		document.getElementById("DATA_RECIMENTO").parentNode.style.display = "none"
		
		
	}
}
//#####################################################################################################

