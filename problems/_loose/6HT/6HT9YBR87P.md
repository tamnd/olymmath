---
tag: 6HT9YBR87P
kind: problem
type: answer
answer: "-1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154509
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0000.parquet#row=198
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 12th Philippine Mathematical Olympiad - Area Stage
---
Let $a, b$, and $c$ be the roots of the equation $2 x^{3}-x^{2}+x+3=0$. Find the value of
$$
\frac{a^{3}-b^{3}}{a-b}+\frac{b^{3}-c^{3}}{b-c}+\frac{c^{3}-a^{3}}{c-a} .
$$
