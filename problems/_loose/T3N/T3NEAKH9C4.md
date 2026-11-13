---
tag: T3NEAKH9C4
kind: problem
type: answer
answer: \frac{2p^{2}+q^{2}+r^{2}}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75322
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a tetrahedron $ABCD$ with equal opposite edges: $|AB|=|CD|=p, |AC|=|BD|=q$, and $|AD|=|BC|=r$. Let $K$ be the midpoint of edge $AB$ and $L$ be the midpoint of edge $CD$.

a) Prove that the line $KL$ is perpendicular to both edges $AB$ and $CD$.

b) Show that the smallest possible value of the sum $|AE|^{2}+|EF|^{2}+|FC|^{2}$, where $E$ and $F$ are any points on the line segment $KL$, is equal to $\frac{2p^{2}+q^{2}+r^{2}}{6}$.
