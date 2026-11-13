---
tag: ZTWQDA2TS2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of numbers whose first two terms are: $a_{1}=a_{2}=1$, and the subsequent terms can be calculated using the expression

$$
a_{n}=2 a_{n-2}+a_{n-1}
$$

where $n \geq 3$, an integer. Let $S_{k}$ denote the sum of the first $k$ terms of the sequence, and examine whether the following equations and statements are correct:

$$
\left\{\begin{array}{l}
(2) S_{2 k-1}=a_{2 k}, \text { (3) } S_{2 k}=a_{2 k+1}-1, \text { (4) } S_{k}-S_{k-4}=10 \cdot 2^{k-4} \\
\\
\text { (5) } S_{k}=10 \cdot \frac{2^{k}-1}{2^{4}-1} ; \\
(6) a_{k}=2 a_{k-1}+(-1)^{k-1}, \text { (7) } a_{k}+a_{k+1}=2^{k}, \text { (8) } a_{k}-a_{k-4}=10 \cdot 2^{k-5}
\end{array}\right.
$$

The terms with numbers $4 j+1$ and $4 j+2$ end in 1, the terms with number $4 j+3$ end in 3, and the terms with number $4 j$ end in 5.

Based on the correct equations, provide an expression for $a_{n}$ that does not use previous terms of the sequence.
