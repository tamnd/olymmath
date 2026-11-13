---
tag: 5XMDX0F67P
kind: problem
type: answer
answer: D_{k}=\begin{cases}4&
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Depending on the natural number $k$, determine the smallest real number $D_{k}$ such that

$$
(a b c)^{2}+(b c d)^{2}+(c d a)^{2}+(d a b)^{2} \leqslant D_{k}
$$

for all non-negative real numbers $a, b, c, d$ for which $a^{k}+b^{k}+c^{k}+d^{k}=4$.
