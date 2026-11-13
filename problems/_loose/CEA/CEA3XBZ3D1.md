---
tag: CEA3XBZ3D1
kind: problem
type: answer
answer: \frac{1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A bubble jumps between the vertices of the square $A B C D$, starting from vertex $A$. With each jump, it has a $\frac{1}{2}-\frac{1}{2}$ probability of landing on one of the adjacent vertices. The bubble stops when it reaches the last vertex it hasn't visited yet. Determine the probability that each vertex will be the last one visited.
