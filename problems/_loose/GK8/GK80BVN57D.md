---
tag: GK80BVN57D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251558
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. There are $n$ islands with $n-1$ bridges connecting them such that one can travel from any island to another. One afternoon, a fire breaks out in one of the islands. Every morning, it spreads to all neighbouring islands. (Two islands are neighbours if they are connected by a bridge.) To control the spread, one bridge is destroyed every night until the fire has nowhere to spread the next day. Let $X$ be the minimum possible number of bridges one has to destroy before the fire stops spreading. Find the maximum possible value of $X$ over all possible configurations of bridges and island where the fire starts at.
