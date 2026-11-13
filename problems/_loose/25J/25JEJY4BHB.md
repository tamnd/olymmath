---
tag: 25JEJY4BHB
kind: problem
type: answer
answer: P(x) = (x-1)^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x)=x^n+a_{n-1}x^{n-1}+\cdots+a_0$ be a polynomial of degree $n\geq 3.$ Knowing that $a_{n-1}=-\binom{n}{1}$ and $a_{n-2}=\binom{n}{2},$ and that all the roots of $P$ are real, find the remaining coefficients. Note that $\binom{n}{r}=\frac{n!}{(n-r)!r!}.$
