---
tag: 6SFD0Z1NT5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a finite set of real numbers $X$, denote
$$
n(X)=\left|\left\{(x, y, z, w) \in X^{4} \mid x+y=z+w\right\}\right| \text {. }
$$

For finite sets of real numbers $A, B, C, D$, prove:
$$
\begin{array}{l}
|\{(a, b, c, d) \in A \times B \times C \times D \mid a+b=c+d\}| \\
\leqslant \sqrt[4]{n(A) n(B) n(C) n(D)} .
\end{array}
$$
