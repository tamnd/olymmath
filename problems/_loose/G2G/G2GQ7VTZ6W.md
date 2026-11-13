---
tag: G2GQ7VTZ6W
kind: problem
type: answer
answer: "167"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_0$, $a_1$, $a_2$, $\dots$ be an infinite sequence of real numbers such that $a_0 = \frac{4}{5}$ and
$$
a_{n} = 2 a_{n-1}^2 - 1
$$
for every positive integer $n$. Let $c$ be the smallest number such that for every positive integer $n$, the product of the first $n$ terms satisfies the inequality
$$
a_0 a_1 \dots a_{n - 1} \le \frac{c}{2^n}.
$$
What is the value of $100c$, rounded to the nearest integer?
