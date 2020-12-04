import Person from "./Person.js";
import Boy from "./Boy.js";
import Girl from "./Girl.js";
import Relationship from "./Relationship.js";
export default class Group {
    name;
    people;
    relationships;
    constructor(name) {
        this.name = name;
        this.people = [];
        this.relationships = [];
    }

    addPeople(p) {
        if (p instanceof Person) {
            this.people.push(p);
        }
    }

    addRelationship(p1, p2) {
        if (p1 instanceof Person && p2 instanceof Person && p1 != p2) {
            let foundRelationship = this.relationship.find((relationship) => {
                return (relationship.a == p1 && relationship.b == p2) || (relationship.a == p2 && relationship.b == p1);
            });

            if (!foundRelationship) {
                let newRelationship = new Relationship(p1, p2);
                this.relationships.push(newRelationship);
            }
        }
    }

    // findAllFriends(p) {
    //     let listFriends = [];
    //     for (let i = 0; i < this.relationships.length; i++) {
    //         if (p instanceof Person && p.name == this.relationships[i].a.name) {
    //             listFriends.push(this.relationships[i].b.name);
    //         }
    //         if (p instanceof Person && p.name == this.relationships[i].b.name) {
    //             listFriends.push(this.relationships[i].a.name);
    //         }
    //     }
    // }

    FindFriends(p) {
        if (p instanceof Person) {
            let listFriends = [];
            for (let relationship of this.relationships) {
                if (relationship.a == person) {
                    listFriends.push(relationship.b);
                } else if (relationship.b == person) {
                    listFriends.push(relationship.a);
                }
            }
            return listFriends;
        }
        return [];
    }

    // findMaleFriends(p) {
    //     let AllFriends = this.findAllFriends(p);
    //     let MaleFriends = [];
    //     for (let i = 0; i < AllFriends.length; i++) {
    //         if (AllFriends[i] instanceof Boy) {
    //             MaleFriends.push(AllFriends[i]);
    //         }
    //     }
    // }

    findMaleFriends(p) {
        let friends = this.FindFriends(p);
        return friends.filter((friend) => {
            return friend instanceof Boy;
        })
    }

    findFemaleFriends(p) {
        let AllFriends = this.findAllFriends(p);
        let FemaleFriends = [];
        for (let i = 0; i < AllFriends.length; i++) {
            if (AllFriends[i] instanceof Girl) {
                FemaleFriends.push(AllFriends[i]);
            }
        }
    }

    findBeautifulFriends(p) {
        let femaleFriends = this.findFemaleFriends(p);
        let beautifulGirls = [];
        for (let i = 0; i < femaleFriends.length; i++) {
            if (femaleFriends[i].beauty > 5) {
                beautifulGirls.push(femaleFriends[i]);
            }
        }
    }
}