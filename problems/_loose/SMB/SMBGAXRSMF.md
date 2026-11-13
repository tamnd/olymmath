---
tag: SMBGAXRSMF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $m$ is a natural number with $m \geq 2$, a sequence of numbers $\left(x_{n}\right)_{n \in\{0,1,2, \ldots\}}$ is defined by the stipulation that $x_{0}=0, x_{1}=1$ and for $n \geq 0$, $x_{n+2}$ is the remainder (with $0 \leq x_{n+2}<m$) when $x_{n+1}+x_{n}$ is divided by $m$.

Investigate whether for every natural number $m$ with $m \geq 2$, there exists a natural number $k$ with $k \geq 1$ such that the three equations $x_{0}=x_{k}, x_{1}=x_{k+1}$, and $x_{2}=x_{k+2}$ hold.
