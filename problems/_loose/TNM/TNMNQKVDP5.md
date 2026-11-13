---
tag: TNMNQKVDP5
kind: problem
type: answer
answer: a) b_n ≥ 1. b) a_n = b_n(b_n − 1)/2. c) a_n = n(n + 1)/2. d) S = 37820.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $\{a_n\}_{n \ge 1}$ be the sequence of positive real numbers satisfying $a_1 = 1$ and
$$
a_{n+1} = a_n + \sqrt{a_n + a_{n+1}}
$$
for $n \ge 1$. Let $b_n = a_{n+1} - a_n$ for $n \ge 1$.

a. Show that $b_n \ge 1$.

b. Show that $a_n = b_n(b_n - 1)/2$.

c. Express $a_n$ in terms of $n$.

d. Find the sum $S = a_1 + a_2 + \cdots + a_{60}$.
