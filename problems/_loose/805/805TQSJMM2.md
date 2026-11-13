---
tag: 805TQSJMM2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 75th Romanian Mathematical Olympiad
---
Let $n \ge 3$ be an integer number. We say that a matrix $A \in \mathcal{M}_n(\mathbb{C})$ has the property $(\mathcal{P})$ if $\det(A + X_{ij}) = \det(A + X_{ji})$, for any $i, j \in \{1, 2, \dots, n\}$, where $X_{ij} \in \mathcal{M}_n(\mathbb{C})$ is the matrix with $1$ at the position $(i, j)$ and $0$ elsewhere.

a) Assume a matrix $A \in \mathcal{M}_n(\mathbb{C})$ with the property $(\mathcal{P})$, such that $\det(A) \neq 0$. Prove that $A = A^T$.

b) Give an example of a matrix $A \in \mathcal{M}_n(\mathbb{C})$ with the property $(\mathcal{P})$, but $A \neq A^T$.
