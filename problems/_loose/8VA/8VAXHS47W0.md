---
tag: 8VAXHS47W0
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $ n = 1,\ 2,\ 3,\ \cdots$, let $ (p_n,\ q_n)\ (p_n > 0,\ q_n > 0)$ be the point of intersection of $ y = \ln (nx)$ and $ \left(x - \frac {1}{n}\right)^2 + y^2 = 1$.

(1) Show that $ 1 - q_n^2\leq \frac {(e - 1)^2}{n^2}$ to find $ \lim_{n\to\infty} q_n$.

(2) Find $ \lim_{n\to\infty} n\int_{\frac {1}{n}}^{p_n} \ln (nx)\ dx$.
