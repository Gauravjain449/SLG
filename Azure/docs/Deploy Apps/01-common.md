# https://docs.microsoft.com/en-in/azure/devops/pipelines/release/?view=azure-devops

1. The agent currently understands two types of artifacts: Azure Pipelines artifacts and Jenkins artifacts.

2. An artifact is a deployable component of your application.

3. Azure Pipelines releases can deploy artifacts that are produced by a wide range of artifact sources such as Azure Pipelines build, Jenkins, or Team City.

4. (Try) How do I send release summaries by email?
a. After a release is triggered and completed, you may want to email the summary to stakeholders. Use the Send Email option on the menu that opens from the ellipses (...) icon in the Pipeline view of the pipeline.

# Images: email-release-summary.png

5. (Try) How do I manage the names for new releases
a. For example, the release name format Release $(Rev:rrr) for build $(Build.BuildNumber) $(Build.DefinitionName) will create releases with names such as Release 002 for build 20170213.2 MySampleAppBuild.

# Images: manage the names for new releases.jpg

6. 
