![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiMXZmaTFGQ2ZRRWZ6bVViZTV1ZjY2RXY4Q3hwYmFSMEltTjdJNDl3RkozUmZLc28wTGdnTjJsN2lDY00yTjFPaGRiRDUzRzE2bVVKU2ZYbmoyeWdLYUxFPSIsIml2UGFyYW1ldGVyU3BlYyI6IklHWGhpaS9PRU9mR2I3L2MiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

Cloud Build Status:
[![Labeler](https://github.com/cmuth001/portfolio-cmuthyala/actions/workflows/label.yml/badge.svg?event=deployment_status)](https://github.com/cmuth001/portfolio-cmuthyala/actions/workflows/label.yml)


**CodeBuild badge statuses:**

- PASSING The most recent build on the given branch passed.
- FAILING The most recent build on the given branch timed out, failed, faulted, or was stopped.
- IN_PROGRESS The most recent build on the given branch is in progress.
- UNKNOWN The project has not yet run a build for the given branch or at all. Also, the build badges feature might have been disabled.

Publish to github pages:

```
ng build --prod --base-href https://cmuth001.github.io/portfolio-cmuthyala/
ngh --dir=dist/apps/portfolio/
```

Github Url: https://cmuth001.github.io/portfolio-cmuthyala/

References:

https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4

https://medium.com/@aashari/deploy-static-website-to-amazon-s3-from-github-repository-3f1245d2a780

https://www.daptontechnologies.com/angular-prettier-husky/

https://docs.aws.amazon.com/codebuild/latest/userguide/sample-build-badges.html
