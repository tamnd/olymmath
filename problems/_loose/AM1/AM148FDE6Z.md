---
tag: AM148FDE6Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33206
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the Dirichlet boundary value problem for the Helmholtz equation in a sphere:

$$
\begin{gathered}
\Delta u+2 u=0, 0 \leqslant r<1 \\
\left.u\right|_{r=1}=3 \cos ^{2} \vartheta
\end{gathered}
$$
