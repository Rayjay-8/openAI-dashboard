
# OpenAI-Dashboard
openAI-dashboard is a Dashboard that allows the user to visualize in a clear and intuitive way how OpenAI models are being used.

![day](public/example1.png)
![cumulative](public/example2.png)


## Quickstart

Just create an .env file and add your openAI key and run:

```bash
npm install && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## how does it work
Routes:

- user info
https://api.openai.com/dashboard/onboarding/login

- graph data
https://api.openai.com/dashboard/billing/usage?end_date=2023-06-01&start_date=2023-05-01

- soft and hard limit
https://api.openai.com/dashboard/billing/subscription

- get request number and context 
https://api.openai.com/v1/usage?date=2023-05-08

## Community & Support

* [GitHub issues](https://github.com/Rayjay-8/openAI-dashboard/issues/new) - to report bugs

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.