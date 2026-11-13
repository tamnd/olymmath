---
tag: G6PWFA5F39
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f : R \to R$, and let $P$ be a nonzero polynomial with degree no more than $2015$. For any nonnegative integer $n$, $f^{(n)}(x)$ denotes the function defined as $f$ composed with itself $n$ times. For example, $f^{(0)}(x) = x$, $f^{(1)}(x) = f(x)$, $f^{(2)}(x) = f(f(x))$, etc. Show that there always exists a real number $q$ such that $$f^{((2017^{2017})!)(q)} \ne (q + 2017)(qP(q) - 1).$$
