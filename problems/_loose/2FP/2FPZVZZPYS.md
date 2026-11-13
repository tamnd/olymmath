---
tag: 2FPZVZZPYS
kind: problem
type: answer
answer: \frac{1}{2}f^{\}(0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178537
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[0,1] \rightarrow \mathbb{R}$ be a continuous function and $\left(a_{n}\right)_{n \geq 1}$ the sequence defined by $a_{n}=\int_{0}^{1} f\left(\frac{x}{n}\right) d x, n \in \mathbb{N}^{*}$.

a) Show that $\lim _{n \rightarrow \infty} a_{n}=f(0)$.

b) If $f$ is differentiable at $x=0$, calculate $\lim _{n \rightarrow \infty} n\left(a_{n}-f(0)\right)$.
