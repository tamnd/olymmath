---
tag: VZHGKSBMTR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a country, there are $g$ cities and $c$ roads, where each road connects exactly two different cities, and there is at most one road between any two cities. The roads are labeled with numbers $1,2, \ldots, c$. Toni must travel in such a way that when he writes down the labels of the roads in the order he has traveled them, he gets a (strictly) increasing sequence of numbers. Prove that there exists a city such that starting from this city, Toni can travel at least $\frac{2 c}{g}$ roads.
