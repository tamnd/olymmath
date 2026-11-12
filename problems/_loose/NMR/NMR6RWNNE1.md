---
tag: NMR6RWNNE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the Dirichlet boundary value problem for Laplace's equation in a cylinder

$$
\begin{array}{ll}
\Delta u=0, 0 \leqslant r<1, & 0<z<1 \\
\left.u\right|_{z=0}=1-r^{2}, & 0 \leqslant r<1 \\
\left.u\right|_{z=1}=0, & 0 \leqslant r<1 \\
\left.u\right|_{r=1}=0, & 0<z<1 .
\end{array}
$$
