---
tag: FT8J4EP12Y
kind: problem
type: answer
answer: a = 0, b = \frac{8}{7}, c = -1, d = -\frac{1}{7}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose two functions $ f(x)=x^4-x,\ g(x)=ax^3+bx^2+cx+d$ satisfy $ f(1)=g(1),\ f(-1)=g(-1)$.

Find the values of $ a,\ b,\ c,\ d$ such that $ \int_{-1}^1 (f(x)-g(x))^2dx$ is minimal.
