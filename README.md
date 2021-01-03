# Panning for Gold

> Mathematicians since Euclid have studied the properties of the golden ratio, including its appearance in the dimensions of a regular pentagon and in a golden rectangle, which may be cut into a square and a smaller rectangle with the same aspect ratio. The golden ratio has also been used to analyze the proportions of natural objects as well as man-made systems such as financial markets, in some cases based on dubious fits to data. The golden ratio appears in some patterns in nature, including the spiral arrangement of leaves and other plant parts.

– [Golden Ratio – Wikipedia][1]


Two quantities are in the golden ratio if their ratio is the same as the ratio of their sum to the larger of the two quantities.

This program compares the ratio of two numbers in the Fibonacci sequence (e.g. 13/8) to determine how close to the golden ratio this position in the sequence comes.

## Roadmap

- [X] Add [GitHub Actions][2] to continuously build and test project
- [X] Consider production deployment options – [Heroku][3]?
- [X] Test-drive adding Golden comparison of a given ratio to the golden ratio
- [X] Add an index.js that iterates through the Fibonacci sequence, stopping when the ratio of sequential pairs matches the golden ratio to 10 significant digits, printing the position reached
- [X] Add Dockerfile to build container image
- [ ] Consider production deployment to Kubernetes?

[1]: https://en.wikipedia.org/wiki/Golden_ratio
[2]: https://github.com/features/actions
[3]: https://www.heroku.com
