var money = [
	{ name: 'ONE HUNDRED', val: 100},
	{ name: 'TWENTY', val: 20},
	{ name: 'TEN', val: 10},
	{ name: 'FIVE', val: 5},
	{ name: 'ONE', val: 1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.1},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'PENNY', val: 0.01}
];

function checkCashreg(price, cash, cid) {
 var o = {status: null, change: []};
 var change = cash - price;
 var reg = cid.reduce(function(acc, curr) {
 acc.total += curr[1];
 acc[curr[0]] = curr[1];
 return acc;
 }, {total: 0});
 if(reg.total === change) {
 o.status = 'CLOSED';
 o.change = cid;
 return o;
 }
 if(reg.total < change) {
 o.status = 'INSUFFICIENT_FUNDS';
 return o;
 }
 var change_arr = money.reduce(function(acc, curr) {
 var value = 0;
 while(reg[curr.name] > 0 && change >= curr.val) {
 change -= curr.val;
 reg[curr.name] -= curr.val;
 value += curr.val;
 change = Math.round(change * 100) / 100;
 }
 if(value > 0) {
 acc.push([ curr.name, value ]);
 }
 return acc;
 }, []);
 if(change_arr.length < 1 || change > 0) {
 o.status = 'INSUFFICIENT_FUNDS';
 return o;
 }
 o.status = 'OPEN';
 o.change = change_arr;
 return o;
}