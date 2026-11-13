---
tag: SG8CNG9MV9
kind: problem
type: answer
answer: c \geq 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a real number $ c > 0$, a sequence $ (x_n)$ of real numbers is defined by $ x_{n + 1} = \sqrt {c - \sqrt {c + x_n}}$ for $ n \ge 0$. Find all values of $ c$ such that for each initial value $ x_0$ in $ (0, c)$, the sequence $ (x_n)$ is defined for all $ n$ and has a finite limit $ \lim x_n$ when $ n\to + \infty$.
