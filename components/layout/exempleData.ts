export const tokensRequests =  [
   {
       "status": "fulfilled",
       "value": {
           "object": "list",
           "data": [
               {
                   "aggregation_timestamp": 1683392400,
                   "n_requests": 2,
                   "operation": "completion",
                   "snapshot_id": "gpt-3.5-turbo-0301",
                   "n_context": 2,
                   "n_context_tokens_total": 244,
                   "n_generated": 2,
                   "n_generated_tokens_total": 128
               },
               {
                   "aggregation_timestamp": 1683392700,
                   "n_requests": 4,
                   "operation": "completion",
                   "snapshot_id": "gpt-3.5-turbo-0301",
                   "n_context": 4,
                   "n_context_tokens_total": 488,
                   "n_generated": 4,
                   "n_generated_tokens_total": 254
               },
               {
                   "aggregation_timestamp": 1683393000,
                   "n_requests": 2,
                   "operation": "completion",
                   "snapshot_id": "code-cushman-001",
                   "n_context": 2,
                   "n_context_tokens_total": 444,
                   "n_generated": 2,
                   "n_generated_tokens_total": 524
               }
           ],
           "ft_data": [],
           "dalle_api_data": [],
           "whisper_api_data": [],
           "current_usage_usd": 0
       }
   },
   {
       "status": "fulfilled",
       "value": {
           "object": "list",
           "data": [
             {
                   "aggregation_timestamp": 1683393000,
                   "n_requests": 2,
                   "operation": "completion",
                   "snapshot_id": "gpt-3.5-turbo-0301",
                   "n_context": 2,
                   "n_context_tokens_total": 244,
                   "n_generated": 2,
                   "n_generated_tokens_total": 124
               }, {
                   "aggregation_timestamp": 1683393000,
                   "n_requests": 2,
                   "operation": "completion",
                   "snapshot_id": "gpt-4-0314",
                   "n_context": 2,
                   "n_context_tokens_total": 554,
                   "n_generated": 2,
                   "n_generated_tokens_total": 1224
               },{
                   "aggregation_timestamp": 1683393000,
                   "n_requests": 2,
                   "operation": "completion",
                   "snapshot_id": "text-davinci:003",
                   "n_context": 2,
                   "n_context_tokens_total": 744,
                   "n_generated": 2,
                   "n_generated_tokens_total": 724
               }
           ],
           "ft_data": [],
           "dalle_api_data": [
               {
                   "timestamp": 1683511920,
                   "num_images": 2,
                   "num_requests": 2,
                   "image_size": "512x512",
                   "operation": "generations"
               }
           ],
           "whisper_api_data": [],
           "current_usage_usd": 0
       }
   }
]


export const costsExample = {
   "object": "list",
   "daily_costs": [
       {
           "timestamp": 1682985600,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 0
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 12
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 0
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 0
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 1"
       },
       {
           "timestamp": 1683072000,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 16
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 0
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 0
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 0
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 2"
       },
       {
           "timestamp": 1683158400,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 18
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 0
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 0
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 0
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 3"
       },
       {
           "timestamp": 1683244800,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 4
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 0
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 0
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 0
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 4"
       },
       {
           "timestamp": 1683331200,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 32
               },
               {
                   "name": "Chat models",
                   "cost": 0.2964
               },
               {
                   "name": "GPT-4",
                   "cost": 0
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 0
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 0
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 5"
       },
       {
           "timestamp": 1683417600,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 0
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 0
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 4
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 15
               },
               {
                   "name": "Audio models",
                   "cost": 16
               }
           ],
           "mes": "May 6"
       },
       {
           "timestamp": 1683504000,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 0
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 0
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 0
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 3.6
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 7"
       },
       {
           "timestamp": 1683590400,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 0
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 0
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 10
               },
               {
                   "name": "Embedding models",
                   "cost": 10
               },
               {
                   "name": "Image models",
                   "cost": 44
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 8"
       },
       {
           "timestamp": 1683676800,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 0
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 0
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 0
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 69
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 9"
       },
       {
           "timestamp": 1683763200,
           "line_items": [
               {
                   "name": "Instruct models",
                   "cost": 0
               },
               {
                   "name": "Chat models",
                   "cost": 0
               },
               {
                   "name": "GPT-4",
                   "cost": 80
               },
               {
                   "name": "Fine-tuned models",
                   "cost": 0
               },
               {
                   "name": "Embedding models",
                   "cost": 0
               },
               {
                   "name": "Image models",
                   "cost": 110
               },
               {
                   "name": "Audio models",
                   "cost": 0
               }
           ],
           "mes": "May 10"
       }
   ],
   "total_usage": 443900
}