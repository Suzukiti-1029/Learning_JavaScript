const hand = [randFace(), randFace(), randFace()];
for (let face of hand)
console.log(`サイコロの目...${face}!`);

for (let i = 0; i < hand.length; i++)
  console.log(`${i+1}回目: ${hand[i]}`);