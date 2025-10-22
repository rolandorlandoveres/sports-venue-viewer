This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment file structure

Create .env.local at root level (the same level as package.json) :

```
API_URL=url to json file
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your google api key
```

## Running and editing

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Functionality 
### Pages 
<img width="1909" height="911" alt="image" src="https://github.com/user-attachments/assets/d3e11fb3-ba05-4d58-894c-1d73af665805" />

There are 3 pages : 
- Sport Venues
- About Us
- Sign Up

About Us and Sign up route to placeholder pages, as the important part is the "Sport Venues" Page for now. 

### Filtering 
We can filter  the sport venues by city and by tag by writing into the respective inputs. The  inputs will search on : 
- pressing enter
- copy pasting a new value

Removing the text from both  inputs will make the page return all  sport venues once again. 
<img width="1751" height="87" alt="image" src="https://github.com/user-attachments/assets/a45efcf0-4563-4634-96bd-511ccca53556" />


### The scrollable area and map view 
<img width="1895" height="741" alt="image" src="https://github.com/user-attachments/assets/31cac65c-6336-48c4-93ac-3807070b0763" />

- The sport venues are displayed as cards / list items on the left
#### Card view 
<img width="606" height="731" alt="image" src="https://github.com/user-attachments/assets/b19e3492-ff9d-4c0c-8179-14c84eb7ed31" />

#### List view 
<img width="619" height="721" alt="image" src="https://github.com/user-attachments/assets/9efd6f2e-485c-4833-ae16-7d0df94874e2" />

- Clicking the view location button will make the map zoom onto the  corresponding pin, and a popper with additional information will appear.
<img width="1265" height="712" alt="image" src="https://github.com/user-attachments/assets/e2b1bdc3-ea63-44a7-8d06-54fbf3207b45" />



  



