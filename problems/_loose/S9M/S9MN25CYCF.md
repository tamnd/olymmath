---
tag: S9MN25CYCF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h3158682
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27709
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $N$ , determine all positive integers $n$ , satisfying the following condition: for any list $d_1,d_2,\ldots,d_k$ of (not necessarily distinct) divisors of $n$ such that $\frac{1}{d_1} + \frac{1}{d_2} + \ldots + \frac{1}{d_k} > N$ , some of the fractions $\frac{1}{d_1}, \frac{1}{d_2}, \ldots, \frac{1}{d_k}$ add up to exactly $N$ .
