---
tag: 3JCBT6BT6E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran Iranian Mathematical Olympiad
---
Let $x_1$ be a fixed positive integer. Prove that there is no positive integer $m > 2500$ such that the sequence $x_{n+1} = x_n^{S(n)} + 1$ is eventually periodic modulo $m$. Where $S(n)$ is the sum of digits of $n$ in base 10.

(We say a sequence is eventually periodic mod $m$ if there are positive integers $N, T$ such that $x_n \equiv x_{n+T} \pmod m$ for all $n \ge N$).
