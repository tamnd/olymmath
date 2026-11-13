---
tag: 1HJYCYYHF8
kind: problem
type: answer
answer: (b - a) \ln \frac{a + b}{2} + b - a - b \ln b + a \ln a
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241953
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$p,q$ satisfies $px+q\geq \ln x$ at $a\leq x\leq b\ (0<a<b)$.

Find the value of $p,q$ for which the following definite integral is minimized and then the minimum value.

$$\int_a^b (px+q-\ln x)dx$$
