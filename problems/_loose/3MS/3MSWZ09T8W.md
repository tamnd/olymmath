---
tag: 3MSWZ09T8W
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive real number $t$, the sequence $\left\{x_{n}\right\}$ satisfies:
$$
x_{1}=1, 8 x_{n+1}=t+x_{n}^{2} \text {. }
$$
(1) Prove: When $7<t \leqslant 12$, for any $n \in \mathbf{Z}_{+}$, we have $1 \leqslant x_{n}<x_{n+1}<2$;
(2) If for any $n \in \mathbf{Z}_{+}$, we have $x_{n}<4$, find the maximum value of $t$.
