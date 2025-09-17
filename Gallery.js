
function switchWavePath(){
const isMobile=window.innerWidth<=600;
  const defaultPath = document.getElementById("wavePath_default");
  const tallPath    = document.getElementById("wavePath_tall");	
			
const defaultPath=
  document.getElementById("wavePath_default");
const tallPath=
  document.getElementById("wavePath_tall")
			
if(isMobile){
	defaultPath.style.display="none";
	tallPath.style.display="inline";
			}
else{
	defaultPath.style.display="inline";
	tallPath.style.display="none";
			}
		}
	window.addEventListener("load",switchWavePath);
	window.addEventListener("resize",switchWavePath);