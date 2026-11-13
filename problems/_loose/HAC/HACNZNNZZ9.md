---
tag: HACNZNNZZ9
kind: problem
type: answer
answer: C_{1}=1,C_{2}=4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest real number $C_{1}$ and the smallest real number $C_{2}$ so that for all positive numbers $a, b, c, d, e$ holds

$$
C_{1}<\frac{a}{a+b}+\frac{b}{b+c}+\frac{c}{c+d}+\frac{d}{d+e}+\frac{e}{e+a}<C_{2}
$$
