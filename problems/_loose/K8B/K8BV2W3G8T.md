---
tag: K8BV2W3G8T
kind: problem
type: answer
answer: \mathrm{C}_{n}^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a country, there are $n$ cities and $n$ nobles, each noble owning one city. Now, each noble has built roads between some cities, and a noble can build at most one road between any two cities (note that there can be multiple roads between two cities, but they belong to different nobles). Suppose all nobles have built a total of $d$ roads. Now, some nobles want to form a "group" such that the cities within the group are connected by roads within the group (it is allowed to pass through cities outside the group as long as the roads belong to the group). However, the nobles find that no group of more than one and fewer than $n$ nobles can form a group. Find the maximum value of $d$ under this condition. ${ }^{[3]}$
(2020, St. Petersburg Mathematical Olympiad)
