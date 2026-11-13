---
tag: 6BPA1V78NM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2108412
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54891
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2015
    source: hf-ai-mo-aops
    label: 2015 239 Open Mathematical Olympiad
---
َA natural number $n$ is given. Let $f(x,y)$ be a polynomial of degree less than $n$ such that for any positive integers $x,y\leq n, x+y \leq n+1$ the equality $f(x,y)=\frac{x}{y}$ holds. Find $f(0,0)$ .
