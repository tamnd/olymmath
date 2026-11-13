---
tag: K15KDHC2A2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a block design with block matrix $A$, by swapping the elements of $A$ from 0 to 1 and vice versa, we obtain the block matrix of a complementary design. If the initial design is a $(b, v, r, k, \lambda)$-design, its complementary design is a $\left(b^{\prime}, v^{\prime}, r^{\prime}, k^{\prime}, \lambda^{\prime}\right)$-design.
(1) Find the formulas for $b^{\prime}, v^{\prime}, r^{\prime}, k^{\prime}$;
(2) Prove that $\lambda^{\prime}=b+\lambda-2r$.
