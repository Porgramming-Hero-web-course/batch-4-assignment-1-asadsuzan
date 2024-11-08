// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

interface Profile {
    name: string;
    age: number;
    email: string
}

// function updateProfile(fullObj: Profile, partialObj: Profile | { name: string } | { age: number } | { email: string }): Profile {
//     return { ...fullObj, ...partialObj }
// }

function updateProfile(fullObj: Profile, partial: Partial<Profile>) {

    return { ...fullObj, ...partial }

}

