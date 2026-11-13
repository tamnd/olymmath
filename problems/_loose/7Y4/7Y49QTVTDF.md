---
tag: 7Y49QTVTDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h366410
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4763
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
---
Find all positive real numbers $\lambda$ such that for all integers $n\geq 2$ and all positive real numbers $a_1,a_2,\cdots,a_n$ with $a_1+a_2+\cdots+a_n=n$ , the following inequality holds: $\sum_{i=1}^n\frac{1}{a_i}-\lambda\prod_{i=1}^{n}\frac{1}{a_i}\leq n-\lambda$ .
