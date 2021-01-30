
// ফাংশন থেকে কোনোকিছু রিটার্ন করা হচ্ছে না, জাস্ট ডিসপ্লে করা হচ্ছে
function getTotal(phone, casing) {
    const phonePrice = 500;
    const casingPrice = 50;
    const phoneCost = phone * phonePrice;
    const casingCost = casing * casingPrice;

    const total = phoneCost + casingCost;
    const totalElement = document.getElementById('totalCost');
    totalElement.innerText = total;
}

// ফাংশনের রেজাল্ট ওয়েভের বিভিন্ন জায়গায় দেখানোর জন্য ফাংশনকে রিটার্ন করতে হয়
function getTotal(phone, casing) {
    const phonePrice = 500;
    const casingPrice = 50;
    const phoneCost = phone * phonePrice;
    const casingCost = casing * casingPrice;

    const total = phoneCost + casingCost;
    return total;
}

// রিটার্ন রেজাল্টকে ওয়েভের বিভিন্ন জায়গায় শো করানোর জন্য নিচের এই ফাংশনটি
const totalCost = getTotal(5, 3); //getTotal(phone, casing) এই ফাংশনটাকে একটি ভেরিয়াবেলে নিয়েছি।
const firstResult = document.getElementById('firstResult');
firstResult.innerText = totalCost // সেই ভেরিয়াবেলকে innerText এর মাধ্যমে HTML -এ শো করছি। 

// একইভাবে উপরের প্রসেস অনুসারে ভেরিয়াবেলকে innerText -এ শো করছি।
const secondResult = document.getElementById('firstResult');
secondResult.innerText = totalCost 


console.log(7);

