---
tag: Q4B7AFF3ZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We want to build a network of roads between 51 camps, $T_{1}, T_{2}, \ldots, T_{51}$, under the following conditions:

a) each road should connect two camps, and should not touch any other camp in between;

b) it should be possible to travel from any camp to any other camp along the network, but in only one way.

We also want to specify how many roads should start from each camp. It is known that if the road network satisfies conditions $a$) and $b$), then

$$
u_{1}+u_{2}+\ldots+u_{51}=100
$$

where $u_{i}$ is the number of roads starting from camp $T_{1}$ $(i=1,2, \ldots, 51)$. Is it true that if the positive integers $u_{1}, u_{2} \ldots, u_{51}$ satisfy (1), then there is a road network in which $u_{i}$ roads start from $T_{i}$ $(i=1,2, \ldots, 51)$?
