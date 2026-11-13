---
tag: JADZ8W15G4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the integer sequence $\left\{x_{n}\right\}: 0 \leqslant x_{0}<x_{1} \leqslant 100$, and for all non-negative integers $n$, we have
$$
x_{n+2}=7 x_{n+1}-x_{n}+280 \text {. }
$$
(1) Prove: if $x_{0}=2, x_{1}=3$, then for each non-negative integer $n$,
$$
x_{n} x_{n+1}+x_{n+1} x_{n+2}+x_{n+2} x_{n+3}+2018
$$

the sum of all positive divisors of the above expression is divisible by 24;
(2) Find all integer pairs $\left(x_{0}, x_{1}\right)$, such that for infinitely many non-negative integers $n$, $x_{n} x_{n+1}+2019$ is a perfect square.
