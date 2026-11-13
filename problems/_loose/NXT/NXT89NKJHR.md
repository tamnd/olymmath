---
tag: NXT89NKJHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=179
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
Let $n$ be an integer and $0 \le m \le n^2 - 1$. Prove that the total number of $m$ such that
$$
x^n + y^n \equiv m \pmod{n^2}
$$
has no integer solution, is at least $\frac{n(n-1)}{2}$.
