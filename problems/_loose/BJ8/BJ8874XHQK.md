---
tag: BJ8874XHQK
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On définit une suite ainsi:
$$
\left\{\begin{array}{l}
u_{0}=15,\ u_{1}=57 \\
u_{n}=u_{n-1}+u_{n-2}\ \text{ pour tout } n \geq 2
\end{array}\right.
$$
Trouver le plus grand entier $k$ tel que $3^{k} \mid u_{2017}$.
