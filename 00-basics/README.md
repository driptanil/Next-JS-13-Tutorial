# 0. Basics

## Creating a Next.js App

![](./readme/npx_create_next_app.png)

## Understanding Next.js File Structure

### `public/` directory 

- Any file placed inside this directory will be transferred to the root of the build, this usually works for static files, such as images, text files, etc.

###  `app/` directory

- Here folders are used to define routes, and the files inside these folders are used to define the UI.

#### Special Files:

-   `page.tsx` - Create the unique UI of a route and make the path publily accessible.
  
-   `layout.tsx` - Create shared UI for a segment and its children> A layout wraps a page or child segment.
  
-   `template.tsx` - Similar to `layout.tsx`, except a new componenet instance is mounted navigation. Use layouts unless you need this behavoir.

-   `error.tsx` - Create loading UI for a segment and its children.

-   `loading.tsx` - Create loading UI for a segment and its children.

-   `not-found.tsx` - The not-found file is rendered when Next.js encounters a [404 error for that page](https://www.makeuseof.com/error-404-mean/). In Next.js 12, you’d have to manually create and set up a 404 page.

-   `head.tsx` - This file specifies the head tag for the route segment it’s defined in.



## Using Experimental Feature `App` directory

### `Page.jsx`

This `page.jsx` is a Server Side Component.
![](./readme/static.png)

Using  `useState() hook` causes error because it is only available on Client Side Components
![](./readme/clientsideproperror.png)

### `Layout.js`

- `layout.js` contains UI that is shared between routes.

- `page.jsx` is rendered in `layout.js` by using the `{children}` prop. 
  
  During rendering, `children` will be populated with the route segments the layout is wrapping.
![](./readme/page.png)

### `Loading.jsx`

- A `loading.jsx` file can create instant loading states built on [Suspense](https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense).
  
![](./readme/loading.png)

### `Error.jsx`

- An `error.jsx` file defines an error UI boundary for a route segment

- An `error.jsx` boundary will **not** handle errors thrown in a `layout.js` component in the **same** segment because the error boundary is nested **inside** that layouts component.

- `"use client"` makes this component **Client Side Rendered**
![](./readme/error.png)

### `Not-Found.jsx`

- The `not-found.jsx` file is used to render UI when the [`notFound`](https://beta.nextjs.org/docs/api-reference/notfound) function is thrown within a route segment.

![](./readme/notfound.png)