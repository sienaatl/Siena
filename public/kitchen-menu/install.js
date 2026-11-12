let deferredInstall=null;const installButton=document.querySelector('#installApp'),installDialog=document.querySelector('#installDialog'),offlineStatus=document.querySelector('#offlineStatus');
const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
if(standalone())installButton.hidden=true;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredInstall=event;installButton.hidden=standalone()});
window.addEventListener('appinstalled',()=>{deferredInstall=null;installButton.hidden=true;installDialog.close()});
installButton.addEventListener('click',async()=>{if(deferredInstall){const prompt=deferredInstall;deferredInstall=null;await prompt.prompt();const choice=await prompt.userChoice;if(choice.outcome==='accepted')installButton.hidden=true;return}installDialog.showModal()});
document.querySelector('#closeInstall').onclick=()=>installDialog.close();installDialog.addEventListener('click',e=>{if(e.target===installDialog){const b=installDialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)installDialog.close()}});
if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').then(()=>navigator.serviceWorker.ready).then(()=>{offlineStatus.textContent='Ready for offline use on this computer.'}).catch(()=>{offlineStatus.textContent='You can still download an offline copy below.'})}else offlineStatus.textContent='Download an offline copy below.';
