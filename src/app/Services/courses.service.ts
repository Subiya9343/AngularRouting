export class CoursesService{
    courses = [
        { id:101, name: 'JS for beginers1', author: 'John', duration: '48 Hours', type: 'Free',
         price: 0.00, rating: 3.5, image: 'assets/shopp.jpg',
         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloribus consectetur adipisicing elit. Minus, doloribus.'},
        { id:102, name: 'JS for beginers2', author: 'John', duration: '48 Hours', type: 'Free',
         price: 0.00, rating: 3.5, image: 'assets/shopp.jpg',
         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloribus.'},
        { id:103, name: 'JS for beginers3', author: 'John', duration: '48 Hours', type: 'Free',
         price: 0.00, rating: 3.5, image: 'assets/shopp.jpg',
         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloribus.'},
        { id:104, name: 'JS for beginers4', author: 'John', duration: '48 Hours', type: 'Free',
         price: 0.00, rating: 3.5, image: 'assets/shopp.jpg',
         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloribus.'},
        { id:105, name: 'JS for beginers5', author: 'John', duration: '48 Hours', type: 'Free',
         price: 0.00, rating: 3.5, image: 'assets/shopp.jpg',
         description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloribus.'},
        { id:106, name: 'JS for beginers6', author: 'John', duration: '48 Hours', type: 'Free',
         price: 0.00, rating: 3.5, image: 'assets/shopp.jpg',
         description: 'JS'}
    ];

    getAllCourses(): any{
        const courseList = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.courses)
            }, 1000)
        })
        return courseList;
    }
}
