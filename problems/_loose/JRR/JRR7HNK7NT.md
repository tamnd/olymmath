---
tag: JRR7HNK7NT
kind: problem
type: answer
answer: \frac{n}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $1<a_{i}<\sqrt{7}, i=1,2, \cdots$, $n$, where the positive integer $n \geqslant 2$.
(1) Prove that for all positive integers $i$,
$$
\frac{1}{a_{i}^{2}-1}+\frac{1}{7-a_{i}^{2}} \geqslant \frac{2}{3} \text {; }
$$
(2) Find the minimum value of $S=\sum_{i=1}^{n} \frac{1}{\sqrt{\left(a_{i}^{2}-1\right)\left(7-a_{i+1}^{2}\right)}}$, where it is agreed that $a_{n+1}=a_{1}$.
