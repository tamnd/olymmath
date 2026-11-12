---
tag: MC2X8XMAFC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the Dirichlet boundary value problem for the Poisson equation in an annulus:

$$
\begin{gathered}
\Delta u=r^{3} \cos \varphi, 1<r<2, \\
\left.u\right|_{r=1}=\cos 2 \varphi \\
\left.\frac{\partial u}{\partial r}\right|_{r=2}=\sin 3 \varphi .
\end{gathered}
$$
