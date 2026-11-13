---
tag: 4J9G7H3WJY
kind: problem
type: answer
answer: '|\text{Tr}(A)| \le n'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246969
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A\in \mathcal{M}_n(\mathbb{R}^*)$. If $A\cdot\ ^t A=I_n$, prove that:

a)$|\text{Tr}(A)|\le n$;

b)If $n$ is odd, then $\det(A^2-I_n)=0$.
