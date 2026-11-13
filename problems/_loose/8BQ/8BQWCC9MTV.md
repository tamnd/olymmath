---
tag: 8BQWCC9MTV
kind: problem
type: answer
answer: \lambda_{1}+\lambda_{2}+\cdots+\lambda_{n}\leqslantn
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g(\theta)=\lambda_{1} \cos \theta+\lambda_{2} \cos 2 \theta+\cdots+\lambda_{n} \cos n \theta$, where $\lambda_{1}, \lambda_{2}, \cdots, \lambda_{n}, \theta$ are all real numbers. If for all real numbers $\theta$, it always holds that $g(\theta) \geqslant-1$. Prove: $\lambda_{1}+\lambda_{2}+\cdots+\lambda_{n} \leqslant n$.
