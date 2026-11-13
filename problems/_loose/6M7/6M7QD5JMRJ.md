---
tag: 6M7QD5JMRJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_0,x_1,\dots, x_{n-1}$ be real numbers such that $0<|x_0|<|x_1|<\dots<|x_{n-1}|$. We will write the sum of the elements of each one of the $2^n$ subsets of $\{x_0,x_1,\dots,x_{n-1}\}$ in a paper. Prove that the $2^n$ written numbers are consecutive elements of a arithmetic progression if and only if the ratios
$$|\frac{x_i}{x_j}|, 0\leq j<i\leq n-1$$
are equal(s) to the ratio(s) obtained with the numbers $2^0,2^1,\dots,2^{n-1}$.
Note: The sum of the elements of the empty set is $0$.
