---
tag: F7YMYYK1K0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2996223
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29832
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229552
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2019
    source: hf-ai-mo-aops
    label: 2019 Argentina National Olympiad
---
The natural numbers from $1$ up to $300$ are evenly located around a circle. We say that such an ordering is *alternate [/i ]if each number is less than its two neighbors or is greater than its two neighbors. We will call a pair of neighboring numbers a *good* pair if, by removing that pair from the circumference, the remaining numbers form an alternate ordering. Determine the least possible number of good pairs in which there can be an alternate ordering of the numbers from $1$ at $300$ inclusive.
