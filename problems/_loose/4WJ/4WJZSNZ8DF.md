---
tag: 4WJZSNZ8DF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h99388
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35813
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2003
    source: hf-ai-mo-aops
    label: 2003 China Team Selection Test
---
Let $g(x)= \sum_{k=1}^{n} a_k \cos{kx}$ , $a_1,a_2, \cdots, a_n, x \in R$ . If $g(x) \geq -1$ holds for every $x \in R$ , prove that $\sum_{k=1}^{n}a_k \leq n$ .
