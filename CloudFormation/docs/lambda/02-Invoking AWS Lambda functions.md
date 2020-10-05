# https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html

[Synchronous invocation]
---
[Asynchronous invocation]
1. You hand off the event to Lambda and Lambda handles the rest.

2. For asynchronous invocation, Lambda places the event in a queue and returns a success response without additional information. A separate process reads events from the queue and sends them to your function. To invoke a function asynchronously, set the invocation type parameter to Event.

e.g. 
$ aws lambda invoke --function-name my-function  --invocation-type Event --payload '{ "key": "value" }' response.json
{
    "StatusCode": 202
}

3. 