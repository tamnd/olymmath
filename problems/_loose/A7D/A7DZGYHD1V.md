---
tag: A7DZGYHD1V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a_{1}=1, a_{2}=2$,
$$
a_{n+2}=\left\{\begin{array}{ll}
5 a_{n+1}-3 a_{n}, & a_{n} a_{n+1} \text { is even; } \\
a_{n+1}-a_{n}, & a_{n} a_{n+1} \text { is odd. }
\end{array}\right.
$$

Prove: For all $n \in \mathbf{N}, a_{n} \neq 0$.
