---
tag: 6HY8PB0C7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A country comprises $2018 n+1$ cities, where $n$ is a non-zero natural number. Some pairs of cities are connected by direct railway lines, such that there is at most one line between any two cities; each line is bidirectional. The distance between two cities $\mathrm{A}$ and $\mathrm{B}$ is the minimum number of lines that need to be taken to travel from $\mathrm{A}$ to $\mathrm{B}$.

Find the set of integers $\mathrm{n}$ for which it is possible to construct a railway network that meets the following criterion:

For any city $\mathrm{C}$ and for any $i \in\{1,2, \ldots, 2018\}$, there are exactly $n$ cities at a distance $i$ from $C$.
