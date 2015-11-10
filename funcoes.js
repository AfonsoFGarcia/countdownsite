var emFuncoes = false
var caiu = false

var text = ""
var funcoes = ""
var funcClass = ""

function differ_aux(f,s){
  var two = moment(s)
  var one = moment(f)

  var diff = moment(two.diff(one))
  var difference = [diff.year()-1970, diff.month(), diff.date()-1, diff.hour(), diff.minute(), diff.second()]

  var text = difference[0] + " "+(difference[0] == 1? "ano" : "anos")+", "
  text += difference[1] + " "+(difference[1] == 1? "m&ecirc;s" : "meses")+", "
  text += difference[2] + " "+(difference[2] == 1? "dia" : "dias")+", "
  text += difference[3] + " "+(difference[3] == 1? "hora" : "horas")+", "
  text += difference[4] + " "+(difference[4] == 1? "minuto" : "minutos")+" e "
  text += difference[5] + " "+(difference[5] == 1? "segundo" : "segundos")+"."

  return text
}

function countup(yr,m,d,h,mn,s){
  return differ_aux(yr+"-"+m+"-"+d+"T"+h+":"+mn+":"+s+"Z", moment().format())
}

function differ(fyr,fm,fd,fh,fmn,fs,syr,sm,sd,sh,smn,ss) {
  return differ_aux(fyr+"-"+fm+"-"+fd+"T"+fh+":"+fmn+":"+fs+"Z", syr+"-"+sm+"-"+sd+"T"+sh+":"+smn+":"+ss+"Z")
}

if(caiu) {
  funcoes = "SIM"
  funcClass = "funcoes sim"
} else {
  funcoes = "N&Atilde;O"
  funcClass = "funcoes nao"
}

setInterval(function(){
  if(emFuncoes)
    text = "O governo est&aacute; em fun&ccedil;&otilde;es h&aacute; " + countup("2015","11","09","11","30","00")
  else
    if(caiu)
      text = "O governo esteve em fun&ccedil;&otilde;es durante " + differ("2015","11","09","11","30","00","2015","12","25","00","00","00")
    else
      text = "E Pedro Passos Coelho j&aacute; s&oacute; est&aacute; em gest&atilde;o."

  var funcoesElem = document.getElementById("funcoes")
  funcoesElem.innerHTML = funcoes
  funcoesElem.className = funcClass
  document.getElementById("timer").innerHTML = text
}, 1000)
