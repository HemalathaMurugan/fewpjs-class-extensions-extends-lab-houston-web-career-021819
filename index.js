// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides;
        //sidesay of length of each side
        this.count = this.sides.length;
    }

    get getCount(){
        return this.sides.length;
    }

    // set getCount(count){
    //     this.sides.length = count;
    // }

    get perimeter(){
        let  perimeter = 0;
        this.sides.forEach(function(length) {
            perimeter = perimeter + length;
        })
        return perimeter;
    }


}

class  Triangle extends Polygon{
    
    constructor(sides){
        super(sides);
    }

    //when I didnot have the constructor, the test passes as well

    get isValid(){
       
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        return ( ( a === b ) && ( a === c ) && ( b === c ) )
        //the tests are written for any two sides to be equal
        //actual triangle validity is sum of any two sides is equal to the other side
       // return ( (a+b === c)||( b+c === a)||( a+c === b) );
    }

}

class Square extends Polygon{
    constructor(sides){
        super(sides);
        //this.sides = sides;
        //when I had the above line the tests failed. 
        //remember if youy have the sides already inside super, dont define it again
    }

    get isValid(){
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        let d = this.sides[3];

        return ( (a===b) && (a===c) && (c===d) );
        //return ( a===b===c===d );
    }

    get area(){
        return Math.pow((this.sides[0]),2);
    }
}