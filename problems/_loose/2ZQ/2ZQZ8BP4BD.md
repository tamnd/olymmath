---
tag: 2ZQZ8BP4BD
kind: problem
type: answer
answer: f(^{n})\geqslantn^{n-1}f()
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $f(x)$ is a non-zero function defined on $\mathbf{R}$, and for any $a, b \in \mathbf{R}^{+}$ it satisfies $f(1)=0, f(a \cdot b) \geqslant a f(b)+b f(a)$. Try to determine the relationship between $f\left(a^{n}\right)$ and $f(a)$.
