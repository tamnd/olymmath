---
tag: 3PSWNT0CTF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=64340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the sides $BC$, $CA$, and $AB$ of triangle $ABC$ (or on their extensions), points $A_1$, $B_1$, and $C_1$ are taken, lying on one straight line. Prove that

$$
\frac{AB}{BC_1} \cdot \frac{C_1 A_1}{B_1 A_1} \cdot \frac{A_1 B}{BC} \cdot \frac{CB_1}{B_1 A}=1
$$
