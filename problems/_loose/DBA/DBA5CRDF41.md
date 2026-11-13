---
tag: DBA5CRDF41
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2,\ldots a_n$ be real numbers such that their sum is equal to zero. Find the value of $$ \sum_{j=1}^{n} \frac{1}{a_j (a_j +a _{j+1}) (a_j + a_{j+1} + a_{j+2}) \ldots (a_j + \ldots a_{j+n-2})}. $$
where the subscripts are taken modulo $n$ assuming none of the denominators is zero.
