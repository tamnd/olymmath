---
tag: 615FHFBXWW
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127025
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1} \in \mathbf{Z}_{+}$, and $a_{1} \leqslant 18$, define the sequence $\left\{a_{n}\right\}$:
$$
a_{n+1}=\left\{\begin{array}{ll}
2 a_{n}, & a_{n} \leqslant 18 ; \\
2 a_{n}-36, & a_{n}>18
\end{array}(n=1,2, \cdots) .\right.
$$

Find the maximum number of elements in the set $M=\left\{a_{n} \mid n \in \mathbf{Z}_{+}\right\}$.
