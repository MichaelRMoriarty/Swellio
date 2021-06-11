## Swellio
A web app where surfers in Los Angeles can sign up to receive text notifications about wave conditions. By filling out the provided form, users can select which surf breaks to track and the conditions quality threshold to trigger notification. For example, a user may choose to receive a text only when the waves at Venice Beakwater and/or El Porto are at least "Very Good". The conditions follow [Surfline's Surf Quality Scale](https://www.surfline.com/surf-science/rating-of-surf-heights-and-quality_31942/).

## Motivation
The inspiration for Swellio came when I missed a day of very good surf because I was working on a project and hadn't checked Surfline in a while. As days of very good surf are few and far between where I live, Swellio is my attempt at preventing that from happening again. 
 
## Screenshots
![home page](https://github.com/MichaelRMoriarty/Swellio/blob/main/public/images/homePage.png)
![sign up](https://github.com/MichaelRMoriarty/Swellio/blob/main/public/images/formPage.png)
![success page](https://github.com/MichaelRMoriarty/Swellio/blob/main/public/images/successPage.png)

## How it works
Upon sign up, the user's information (name, email, phone, surf spots, surf conditions) is stored in a MongoDB collection. Via node-cron, an algorithm runs throughout the day that (1) fetches surf conditions for all breaks in Los Angeles from Surfline's API, (2) compares the live surf conditions to users' stored preferences, and (3) if the conditions are equal or better than a user's selected conditions at a selected break, sends a text notification to their phone via Twilio.   

## Tech/framework used
<b>Built with</b>
- [React.js](https://reactjs.org/)
- [MongoDb](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Twilio](https://www.twilio.com/)


## License

ISC © [Michael Moriarty]()
