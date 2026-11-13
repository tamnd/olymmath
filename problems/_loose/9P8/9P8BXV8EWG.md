---
tag: 9P8BXV8EWG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h38449
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35727
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2000
    source: hf-ai-mo-aops
    label: 2000 China Team Selection Test
---
Let $F$ be the set of all polynomials $\Gamma$ such that all the coefficients of $\Gamma (x)$ are integers and $\Gamma (x) = 1$ has integer roots. Given a positive intger $k$ , find the smallest integer $m(k) > 1$ such that there exist $\Gamma \in F$ for which $\Gamma (x) = m(k)$ has exactly $k$ distinct integer roots.
