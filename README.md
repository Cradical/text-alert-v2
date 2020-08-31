## Text-Alert

### Description

This is a small interactive application that will send a SMS text message to my mobile device once you click the send button. If you include an email address that you have access to I will take a screenshot of the text and include it in my response.

### Architecture

If it wasn't obvious enough with the swirling React icon at the top, you might have guessed correctly that I built this small app in React. Here are some neat features of what's behind it:

- The client is communicating with Amazon's Simple Notification Service (SNS) which is a pub/sub messaging service. The client is the publisher and my mobile device is subscribed to the Text Alert Topic which is registered in SNS.
- The app is hosted as a static website using Amazon's Simple Storage Service (S3). There is a lot of cool things you can do with buckets but since this app is so small that is the best configuration for the job.
- The deployment process is fully automated using AWS Code Pipeline which listens to my gitHub repo for changes to the master branch. Once a change is detected, AWS will clone the latest version of the repo, run an installation processes to require any dependencies, run the build procedure and then copy all the optimized files to the S3 which makes the small app accessible at this [endpoint](http://text-alert.s3-website-us-east-1.amazonaws.com)
