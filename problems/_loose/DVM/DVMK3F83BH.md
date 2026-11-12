---
tag: DVMK3F83BH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33927
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable with distribution function $F=F(x)$ and $C$ be a constant. Find the distribution functions of the following random variables:

$$
X \vee C \equiv \max (X, C), X \wedge C \equiv \min (X, C), X^{C}= \begin{cases}X, & |X| \leqslant C \\ 0, & |X|>C\end{cases}
$$
