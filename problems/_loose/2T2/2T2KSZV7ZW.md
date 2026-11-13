---
tag: 2T2KSZV7ZW
kind: problem
type: answer
answer: \frac{1}{3^{n+1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220779
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Positive numbers $a$, $b$, $c$ satisfy $\frac{1}{a}+\frac{1}{b}+\frac{1}{c}=1$. Find the greatest possible value of $$E(a,b,c)=\frac{a^{n}}{a^{2n+1}+b^{2n} \cdot c + b \cdot c^{2n}}+\frac{b^{n}}{b^{2n+1}+c^{2n} \cdot a + c \cdot a^{2n}}+\frac{c^{n}}{c^{2n+1}+a^{2n} \cdot b + a \cdot b^{2n}}$$
