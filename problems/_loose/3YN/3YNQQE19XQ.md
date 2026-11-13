---
tag: 3YNQQE19XQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1956 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1899520
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56812
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249709
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1956
    source: hf-ai-mo-aops
    label: 1956 Moscow Mathematical Olympiad
---
a) What is the least number of points that can be chosen on a circle of length $1956$ , so that for each of these points there is exactly one chosen point at distance $1$ , and exactly one chosen point at distance $2$ (distances are measured along the circle)?

b) On a circle of length $15$ there are selected $n$ points such that for each of them there is exactly one selected point at distance $1$ from it, and exactly one is selected point at distance $2$ from it. (All distances are measured along the circle.) Prove that $n$ is divisible by $10$ .
