---
tag: PWSBQYYGSC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h86722
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22960
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1995
    source: hf-ai-mo-aops
    label: 1995 IberoAmerican
---
Let $n$ be a positive integer greater than 1. Determine all the collections of real numbers $x_1,\ x_2,\dots,\ x_n\geq1\text{ and }x_{n+1}\leq0$ such that the next two conditions hold:

(i) $x_1^{\frac12}+x_2^{\frac32}+\cdots+x_n^{n-\frac12}= nx_{n+1}^\frac12$ (ii) $\frac{x_1+x_2+\cdots+x_n}{n}=x_{n+1}$
