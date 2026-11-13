---
tag: P7QAXG3T24
kind: problem
type: answer
answer: x_n = n + \langle \sqrt{n} \rangle
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_n$ be the $n$-th non-square positive integer. Thus $x_1=2, x_2=3, x_3=5, x_4=6,$ etc. For a positive real number $x$, denotes the integer closest to it by $\langle x\rangle$. If $x=m+0.5$, where $m$ is an integer, then define $\langle x\rangle=m$. For example, $\langle 1.2\rangle =1, \langle 2.8 \rangle =3, \langle 3.5\rangle =3$. Show that $x_n=n+\langle \sqrt{n}\rangle$
