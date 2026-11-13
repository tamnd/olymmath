---
tag: PDZMYM8KTA
kind: problem
type: answer
answer: P(n+1)=\frac{n+1+(-1)^n}{n+2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 1$ and $P \in \mathbb{R}_{n}[X]$ such that $\forall k \in \llbracket 0, n \rrbracket, P(k)=\frac{k}{k+1}$. Calculate $P(n+1)$
