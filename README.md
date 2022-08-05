# React Interview Framework
This framework is a baseline for interviews covering React and TypeScript.

See below for some suggested exercises to work through.

## Stack
* Create React App
* React Router
* React Query
* React Table
* Chakra UI
* Tailwind CSS

## Basic Development
1. `cp .env.default .env`
2. `npm install`
3. `npm start`

## Suggested Exercises
### Create a Post page
```
As a user
I want a Post page with post details
So that I can view a post in full.
```

**Success Criteria**
* There is a Post page that can be accessed via URL
* The Post page can be accessed by clicking on some part of the relevant post on the Posts page

### Filter the Posts page
```
As a user
I want to filter the results of the Posts page
So that I can see only the posts that are relevant to me.
```

**Success Criteria**
* The list of posts on the Posts page can be filtered by any text in the post
* The filter applies only locally and not to the API query

### Add a Posts table
```
As an admin
I want an admin Posts page with a list of posts in a table
So that I can quickly see all the posts available and decide what to do with them.
```

**Success Criteria**
* There is an Admin route that displays a table of posts

### Add a Posts Table and Add the Ability to CRUD Posts
```
As an admin
I want an admin Posts page with a list of posts in a table
So that I can manage posts by Creating, Updating, and Deleting them.
```

**Success Criteria**
* There is an Admin route that displays a table of posts
* Posts can be created, edited, and deleted