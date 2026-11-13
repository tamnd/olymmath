---
tag: 4MHN3B35JB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
13 Given $A=\left(a_{i j}\right)_{v \times n}, k>0, \lambda>0, k<\lambda$, and $A$ has exactly $k$ ones in any row, and any two rows have exactly $\lambda$ columns that are simultaneously 1. Prove:
(1) $A J=k J$
(2) $A J^{\top}=(k-\lambda) I+\lambda J$
(3) $A^{1}$ exists.
(4) $A{ }^{1} J=k{ }^{1} J$
(5) $A^{\top} J=(k-\lambda) I+\lambda k J A$
(6) $J A=k^{1}(k-\lambda+\lambda v) J$
(7) $k-\lambda+k v=k^{2}$
