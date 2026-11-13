---
tag: 3W1HWDXF2Q
kind: problem
type: answer
answer: \frac{n^2 + n}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254283
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Some of the $n + 1$ cities in a country (including the capital city) are connected by one-way or two-way airlines. No two cities are connected by both a one-way airline and a two-way airline, but there may be more than one two-way airline between two cities. If $d_A$ denotes the number of airlines from a city $A$, then $d_A \le n$ for any city $A$ other than the capital city and $d_A + d_B \le n$ for any two cities $A$ and $B$ other than the capital city which are not connected by a two-way airline. Every airline has a return, possibly consisting of several connected flights. Find the largest possible number of two-way airlines and all configurations of airlines for which this largest number is attained.
