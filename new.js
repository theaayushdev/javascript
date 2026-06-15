const developers = [
 { name: "John", skills: ["React", "Node"] , address: { permanent: {houseno: '123'}}},
 { name: "Jane", skills: ["React", "Java"] },
 { name: "Mike", skills: ["Node", "Python"] },
 { name: "Sarah", skills: ["React"] }
];


// item ?? item.address ?? item.address.temporary ?? item.address.temporary.houseno --> null colleaching
// item?.address?.temporary?.houseno --> optional chaining

//object to hold count of all skills
let countSkill = {};
//logic to scan all the array of skills and populate countSkill
developers.map((item)=>{
    item.skills.map((skill)=>{
        countSkill[skill] = countSkill[skill] ? countSkill[skill]  + 1 : 1;
    })


console.log({countSkill})

// object element with larger count
let mostPreferedSkill = 0;
// object element key
let mostPreferredIndex = null;

//logic to find largest count
//['react', 'node', 'java', 'python']
Object.keys(countSkill).map((item)=>{
    if(countSkill[item] > mostPreferedSkill)
        {
        mostPreferedSkill = countSkill[item];
        mostPreferredIndex = item;
    }
})
console.log({mostPreferedSkill: mostPreferredIndex})

