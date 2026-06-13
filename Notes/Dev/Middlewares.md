# Middleware

## What is Middleware?

Middleware runs **before the route handler**.

Think of middleware as a **gate** that every request passes through before reaching the main route.

```text
Client Request
      ↓
  Middleware
      ↓
 Route Handler
      ↓
   Response
```

Middleware can:

- Allow the request to continue.
- Stop the request and send a response.
- Modify the request object.
- Modify the response object.
- Execute code before the route handler runs.

Common use cases:

- Authentication
- Authorization
- Logging
- Validation
- Error Handling

---

## Using Middleware

```js
app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    console.log(new Date());

    next();
});
```

### Explanation

`app.use()` applies middleware to all routes below it.

Inside middleware, we can access:

```js
req.url
req.method
new Date()
```

The `next()` function passes control to the next middleware or route handler.

---

## Example Flow

```text
GET /users
     ↓
Middleware Executes
     ↓
Checks Authentication
     ↓
Calls next()
     ↓
Route Handler Executes
     ↓
Response Sent
```

---

## Route Handler

A route handler contains the main logic for a specific route.

Example:

```js
app.get("/", (req, res) => {
    res.send("Hello World");
});
```

---

## Middleware + Route Handler Example

```js
app.use((req, res, next) => {
    console.log("Request received");
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});
```

### Execution Order

```text
Request
   ↓
Middleware
   ↓
Route Handler
   ↓
Response
```

---

## Key Idea

> Middleware runs before the route handler and acts like a gate for incoming requests.
>
> It can inspect, modify, allow, or block requests before they reach the main application logic.
