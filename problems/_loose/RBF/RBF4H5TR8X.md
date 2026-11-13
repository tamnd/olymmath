---
tag: RBF4H5TR8X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequences $\left(a_{n}\right)_{n \geqslant 0}$ and $\left(b_{n}\right)_{n \geqslant 0}$ are defined by

$$
\left\{\begin{array} { l l }
{ a _ { n } = 0 } & { \text { if } n = 0 ; } \\
{ a _ { n } = 2 a _ { \lfloor n / 2 \rfloor } + n } & { \text { if } n \geqslant 1 ; }
\end{array} \text { and } \left\{\begin{array}{ll}
b_{n}=0 & \text { if } n=0 \\
b_{n}=3 b_{\lfloor n / 3\rfloor}+n & \text { if } n \geqslant 1
\end{array}\right.\right.
$$

Prove that the sequence with general term $2^{a_{n}}-3^{b_{n}}$ changes sign infinitely often.
