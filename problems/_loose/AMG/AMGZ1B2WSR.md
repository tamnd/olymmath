---
tag: AMGZ1B2WSR
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f: \mathbf{R} \rightarrow(0,+\infty)$ be differentiable, strictly decreasing, with $f(0)=1$ and $f^{\prime}(0)=-1$. Let the sequence $\left(a_{n}\right)_{n=1}^{\infty}$ be defined by: $a_{1}=1$ and $a_{n+1}=a_{n} f\left(a_{n}\right), \forall n \geq 1$. Show that the limit $\lim _{n \rightarrow \infty}\left(n a_{n}\right)$ exists and compute this limit.
