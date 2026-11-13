---
tag: PBVRGVKGNV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1698845
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54402
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1995
    source: hf-ai-mo-aops
    label: 1995 Romania Team Selection Test
---
Let $m,n$ be positive integers, greater than 2.Find the number of polynomials of degree $2n-1$ with distinct coefficients from the set $\left\{ 1,2,\ldots,m\right\}$ which are divisible by $x^{n-1}+x^{n-2}+\ldots+1.$
