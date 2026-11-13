---
tag: 9DSRKAX5KY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $k \geq 3$ un entier. On définit la suite $\left(a_{n}\right)_{n \geq k}$ par $a_{k}=2k$, et
$$
a_{n}= \begin{cases}a_{n-1}+1 & \text{ si } \operatorname{pgcd}\left(a_{n-1}, n\right)=1 \\ 2n & \text{ sinon. }\end{cases}
$$

Montrer que la suite $\left(a_{n+1}-a_{n}\right)_{n \geq k}$ a une infinité de termes qui sont des nombres premiers.
