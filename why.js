

const plusBtn=document.getElementById('plus')
const zeroBtn=document.getElementById ('zero')
const minusBtn=document.getElementById ('minus')
const ticketCountDisplay = document.getElementById('zero');
const para=document.getElementById('abc')
const amounts=document.getElementById('d')
const btns=document.getElementById('btn')
let ticketCount=0
let amount=300
plusBtn.addEventListener('click',()=>{

ticketCount++;
ticketCountDisplay.textContent=ticketCount
para.textContent=ticketCount 
amounts.textContent=amount*ticketCount

})
minusBtn.addEventListener('click',()=>{
    if(ticketCount>0){
        ticketCount--;
        ticketCountDisplay.textContent=ticketCount;
        para.textContent=ticketCount
        amounts.textContent=amount*ticketCount
    }
    
})
btns.addEventListener('click',()=>{
        alert("Payment has been done")
})
