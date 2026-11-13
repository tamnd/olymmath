---
tag: 6PEEQWB2YM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Let $x_1$, $x_2$, $\ldots\,$, $x_n$ be a sequence of $n$ real numbers. Say that a sequence $a_1$, $a_2$, $\ldots\,$, $a_n$ is *unimodular* if each $a_i$ is $\pm 1$. Prove that
$$
\sum a_1 a_2 \ldots a_n (a_1x_1 + a_2x_2 + \cdots + a_nx_n)^n = 2^{n} n! x_1 x_2 \ldots x_n ,
$$
where the sum is over all $2^{n}$ unimodular sequences $a_1$, $a_2$, $\ldots\,$, $a_n$.
