---
tag: S8SRAT3CB4
kind: problem
type: answer
answer: "280"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An integer container $(x, y, z)$ is a rectangular prism with positive integer side lengths $x, y, z$, where $x \leq y \leq z$. A stick has $x=y=1$; a flat has $x=1$ and $y>1$; and a box has $x>1$. There are 5 integer containers with volume 30: one stick $(1,1,30)$, three flats $(1,2,15),(1$, $3,10),(1,5,6)$ and one box $(2,3,5)$.
a. How many sticks, flats and boxes are there among the integer containers with volume 36 ?
b. How many flats and boxes are there among the integer containers with volume 210 ?
c. Suppose $n=p_{1}^{e_{1}} \cdots p_{k}^{e_{k}}$ has $k$ distinct prime factors $p_{1}, p_{2}, \ldots, p_{k}$, each with integer exponent $e_{1} \geq 1, e_{2} \geq 1, \ldots, e_{k} \geq 1$ and $k \geq 3$. How many boxes are there among the integer containers with volume $n$ ? Express your answer in terms of $e_{1}, e_{2}, \ldots, e_{k}$. How many boxes with volume $n=8!$ are there?
