---
tag: Z0HM39GNH2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an infinite numerical sequence $\left\{a_{n}\right\}$. It is known that $\lim _{n \rightarrow \infty}\left(a_{n+1}-\frac{a_{n}}{2}\right)=0$. Prove that $\lim _{n \rightarrow \infty} \alpha_{n}=0$.

240*. In a certain country, it is possible to travel from any city to any other city without passing through other cities. The cost of each such trip is known. Two travel routes have been compiled through the cities of the country. Each city appears exactly once in each of these routes. The routes were compiled according to the following principle: the starting point of the route is chosen arbitrarily, and at each subsequent step, among the cities that the route has not yet passed through, the one with the lowest cost of travel from the previous city is chosen (if there are several such cities, any one of them is chosen); and so on until all cities have been passed through. When compiling the second route, the starting city is also chosen arbitrarily, and at each subsequent step, among the cities that the route has not yet passed through, the one with the highest cost of travel from the previous city is chosen. Prove that the total cost of travel along the first route is not greater than the total cost of travel along the second route.
