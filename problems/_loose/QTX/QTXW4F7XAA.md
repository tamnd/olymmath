---
tag: QTXW4F7XAA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A certain country has several cities. From any city, it is possible to directly reach another city without passing through other cities. The cost of travel between every two cities is known. To travel to all cities in the country once, there are two methods for choosing the route, each of which passes through each city exactly once.

The first method allows the starting point to be chosen arbitrarily, and each subsequent city is selected as follows: from the cities not yet included in the route, choose the city with the lowest travel cost from the previous city (if there are multiple such cities, choose one arbitrarily), until all cities have been visited.

The starting point for the second route is also chosen arbitrarily, but each subsequent city is selected based on the following principle: from the cities not yet included in the route, choose the city with the highest travel cost from the previous city, until all cities have been visited.
Prove that the total travel cost of the first route is no more than the total travel cost of the second route.
