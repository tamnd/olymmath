---
tag: C568ZJQNB4
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $(u_n)$ satisfying:$$\left\{ \begin{array}{l}
1 \le {u_1} \le 3\\
{u_{n + 1}} = 4 - \dfrac{{2({u_n} + 1)}}{{{2^{{u_n}}}}},\forall n \in \mathbb{Z^+}.
\end{array} \right.$$
Prove that: $1\le u_n\le 3,\forall n\in \mathbb{Z^+}$ and find the limit of $(u_n).$
