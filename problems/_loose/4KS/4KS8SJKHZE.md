---
tag: 4KS8SJKHZE
kind: problem
type: answer
answer: "64"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive numbers $a, b, c, d$. Find the minimum value of the expression

$$
A=\left(\frac{a+b}{c}\right)^{4}+\left(\frac{b+c}{d}\right)^{4}+\left(\frac{c+d}{a}\right)^{4}+\left(\frac{d+a}{b}\right)^{4}
$$
