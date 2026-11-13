---
tag: XPNG4STEAW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Romania Team Selection Tests
    url: https://artofproblemsolving.com/community/c6h1538020
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54632
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2016
    source: hf-ai-mo-aops
    label: 2016 Romania Team Selection Tests
---
Let $n$ be a positive integer, and let $a_1,a_2,..,a_n$ be pairwise distinct positive integers. Show that $$ \sum_{k=1}^{n}{\frac{1}{[a_1,a_2,…,a_k]}} <4, $$ where $[a_1,a_2,…,a_k]$ is the least common multiple of the integers $a_1,a_2,…,a_k$ .
