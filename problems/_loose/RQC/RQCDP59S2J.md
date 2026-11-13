---
tag: RQCDP59S2J
kind: problem
type: answer
answer: 5,199,299,399,499,599,699,799,899,999
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
205 Starting from any three-digit number $n$, we get a new number $f(n)$, which is the sum of the three digits of $n$, the pairwise products of the three digits, and the product of the three digits.
（1）When $n=625$, find $\frac{n}{f(n)}$ (take the integer value).
（2）Find all three-digit numbers $n$ such that $\frac{n}{f(n)}=1$.
