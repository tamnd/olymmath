---
tag: QFWQX0QHYT
kind: problem
type: answer
answer: (n, p) = \left(n, \frac{1}{n^{1/n}}\right) \quad \text{for} \quad n \ge 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264019
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Grogg's favorite positive integer is $n\ge2$, and Grogg has a lucky coin that comes up heads with some fixed probability $p$, where $0<p<1$. Once each day, Grogg flips his coin, and if it comes up heads, he does two things:

- He eats a cookie.

- He then flips the coin $n$ more times. If the result of these $n$ flips is $n-1$ heads and $1$ tail (in any order), he eats another cookie.

He never eats a cookie except as a result of his coin flips. Find all possible values of $n$ and $p$ such that the expected value of the number of cookies that Grogg eats each day is exactly $1$.
