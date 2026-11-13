---
tag: Y2T8MBNSQX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Proof: For all positive real numbers $a, b, c, d$, we have
$$
\sum \frac{a^{4}}{a^{3}+a^{2} b+a b^{2}+b^{3}} \geqslant \frac{a+b+c+d}{4},
$$

where $\sum$ denotes the cyclic sum.
(2014, Bulgarian National Team Selection Exam)
If the inequality in Question 1 is supplemented with the condition
$$
a+b+c=3
$$

and the cyclic permutations of $a, b, c$ are added together, then it can be transformed into
