//import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Carlos',
      email: 'edcartech@gmail.com',
      //password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Doris',
      email: 'doris@gmail.com',
      //password: bcrypt.hashSync('123456'), 
      isAdmin: false,
    },
  ],
  services: [
    {
      _id:1,
      name: 'Sofware Development',
      slug: 'sofware-development',
      featuredImage: '/assets/images/services/sofware-development.png',
    },
    {
      _id:2,
        name: 'Web Developement',
        slug: 'web-developement',
        featuredImage: '/assets/images/services/web-developement.png',
    },
    {
      _id:3,
        name: 'E-Commerce',
        slug: 'e-Commerce',
        featuredImage: '/assets/images/services/e-commerce.png',
    },
    {
      _id:4,
        name: 'Digital Marketing',
        slug: 'digital-marketing',
        featuredImage: '/assets/images/services/digital-marketing.png',
    },
    
  ],
};
export default data;
