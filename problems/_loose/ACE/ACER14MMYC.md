---
tag: ACER14MMYC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the equalities:

$$
\begin{gathered}
\int_{-\pi}^{\pi} \cos k x \cos l x d x=\left\{\begin{array}{l}
0, k \neq l \\
\pi, k=l
\end{array}\right. \\
\int_{-\pi}^{\pi} \sin k x \sin l x d x=\left\{\begin{array}{l}
0, k \neq l \\
\pi, k=l
\end{array}\right. \\
\int_{-\pi}^{\pi} \cos k x \sin l x d x=0, \int_{-\pi}^{\pi} \cos k x d x=0 \\
\int_{-\pi}^{\pi} \sin k x d x=0, \text { where } k, l \in \mathbb{Z}
\end{gathered}
$$
