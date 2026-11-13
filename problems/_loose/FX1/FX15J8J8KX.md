---
tag: FX15J8J8KX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Fibonacci, Not covered in class) To climb the stairs, Leonardo can take steps of 1 stair and steps of 2 stairs. In how many different ways can he climb a staircase with $n$ stairs? We will establish a recurrence relation, then show using $\varphi=$ $\frac{1+\sqrt{5}}{2}$ and $\bar{\varphi}=\frac{1-\sqrt{5}}{2}$ that for any natural number $n$, this number is $\frac{1}{\sqrt{5}}\left(\varphi^{n+1}-\bar{\varphi}^{n+1}\right)$. For this, we can use the relations $\varphi^{2}=\varphi+1$ and $\bar{\varphi}^{2}=\bar{\varphi}+1$.
