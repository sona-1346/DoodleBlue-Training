const personal={
    name:"Arun",age:20
}
const professional={
    role:"Develper",
    company:"tcs"
};
const profile={
    ...personal,
    ...professional
};
console.log(profile);