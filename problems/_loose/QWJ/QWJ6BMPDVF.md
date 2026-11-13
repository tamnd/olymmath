---
tag: QWJ6BMPDVF
kind: problem
type: answer
answer: f^{(n)}(1) = (-1)^{n+1} n! \left( 1 + \frac{1}{2} + \cdots + \frac{1}{n} \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205904
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a function satisfying
$$xf(x)=\ln x \ \ \ \ \ \ \ \ \text{for} \ \ x>0$$
Show that $f^{(n)}(1)=(-1)^{n+1}n!\left(1+\frac{1}{2}+\cdots+\frac{1}{n}\right)$ where $f^{(n)}(x)$ denotes the $n$-th derivative evaluated at $x$.
