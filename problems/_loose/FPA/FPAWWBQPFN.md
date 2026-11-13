---
tag: FPAWWBQPFN
kind: problem
type: answer
answer: \frac{2}{\pi}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence:

$\left(x_{n}\right)_{n \geq 1}$ of real numbers defined by $x_{1}=\sqrt{\frac{1}{2}}, x_{n+1}=\sqrt{\frac{1+x_{n}}{2}}, n \geq 1$. Calculate $\lim _{n \rightarrow \infty} x_{1} \cdot x_{2} \cdot \ldots . . x_{n}$
