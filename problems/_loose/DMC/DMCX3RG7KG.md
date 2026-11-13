---
tag: DMCX3RG7KG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h421157
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7407
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209524
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2011
    source: hf-ai-mo-aops
    label: 2011 Tuymaada Olympiad
---
Let $P(n)$ be a quadratic trinomial with integer coefficients. For each positive integer $n$ , the number $P(n)$ has a proper divisor $d_n$ , i.e., $1<d_n<P(n)$ , such that the sequence $d_1,d_2,d_3,\ldots$ is increasing. Prove that either $P(n)$ is the product of two linear polynomials with integer coefficients or all the values of $P(n)$ , for positive integers $n$ , are divisible by the same integer $m>1$ .
