---
tag: BNHKG0703A
kind: problem
type: answer
answer: The sum is at most 1/6, with equality when a = b = c = 3.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $a$, $b$, $c$ des réels strictement positifs tels que : $ab + bc + ca = abc$. Montrer que :
$$
\frac{1}{a^{2}+b^{2}}+\frac{1}{b^{2}+c^{2}}+\frac{1}{c^{2}+a^{2}} \leqslant \frac{1}{6},
$$
et trouver les cas d'égalité.
