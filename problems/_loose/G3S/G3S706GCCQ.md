---
tag: G3S706GCCQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a point $A_{0}$ and $n$ vectors $\vec{a}_{1}, \vec{a}_{2}, \cdots, \vec{a}_{n}$ in the plane such that $\vec{a}_{1}+\vec{a}_{2}+\cdots+\vec{a}_{n}=\overrightarrow{0}$. Each permutation of these vectors $\vec{a}_{i_{1}}, \vec{a}_{i_{2}}, \cdots, \vec{a}_{i_{n}}$ defines a set of points: $A_{1}, A_{2}, \cdots, A_{n}=A_{0}$, such that $\vec{a}_{i_{1}}=\overrightarrow{A_{0} A_{1}}, \vec{a}_{i_{2}}=\overrightarrow{A_{1} A_{2}}, \cdots, \vec{a}_{i_{n}}=\overrightarrow{A_{n-1} A_{n}}$. Prove that there exists a permutation such that all points $A_{1}, A_{2}, \cdots, A_{n-1}$ defined by it lie inside or on the boundary of a $60^{\circ}$ angle with vertex at $A_{0}$.
