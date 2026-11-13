---
tag: EC1S38H4TK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
For each nonnegative integer $n$, polynomial $K_n(x_1, x_2, ..., x_n)$ is defined recursively as follows,
$$
\begin{array}{l}
K_0 = 1 \\
K_1(x_1) = x_1 \\
K_n(x_1, \dots, x_n) = x_n K_{n-1}(x_1, \dots, x_{n-1}) + (x_n^2 + x_{n-1}^2) K_{n-2}(x_1, \dots, x_{n-2}).
\end{array}
$$
Prove that $K_n(x_1, x_2, ..., x_{n-1}, x_n) = K_n(x_n, x_{n-1}, ..., x_2, x_1)$.
