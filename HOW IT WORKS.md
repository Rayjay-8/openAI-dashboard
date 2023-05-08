
# todo 
- pegar todos os dados possiveis da openai
- monstar o schema dos graficos
1 - uso diario
2 - custo
3 - requests
4 - tokens

## como isso funciona
1 - deve-se fazer login para pegar os tokens necessario
- faça um post para rota 
https://api.openai.com/dashboard/onboarding/login

pegue os dados de  
https://api.openai.com/dashboard/billing/usage?end_date=2023-06-01&start_date=2023-05-01

dados de soft and hard limit
https://api.openai.com/dashboard/billing/subscription

usando como autorização o user.session.sensitive_id