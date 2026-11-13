---
tag: F12PNX2PSJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose a $3\times 3$ matrix $A$ satisfies $\mathbf{v}^t A \mathbf{v} > 0$ for any vector $\mathbf{v} \in\mathbb{R}^3 -\{0\}$. (Note that $A$ may not be a symmetric matrix.)
(1) Prove that $\det(A)>0$.
(2) Consider diagonal matrix $D=\text{diag}(-1,1,1)$. Prove that there's exactly one negative real among eigenvalues of $AD$.
