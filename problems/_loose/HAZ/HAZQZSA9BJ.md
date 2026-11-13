---
tag: HAZQZSA9BJ
kind: problem
type: answer
answer: "1111"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For non-negative integers $x$, the function $f(x)$ is defined as follows:
$$
f(0)=0, f(x)=f\left(\left[\frac{x}{10}\right]\right)+\left[\lg \frac{10}{x-10\left[\frac{x-1}{10}\right]}\right] .
$$
What is the value of $x$ when $f(x)$ reaches its maximum in the range $0 \leqslant x \leqslant 2006$?
