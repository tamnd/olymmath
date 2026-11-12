---
tag: JXJPMYX2MP
kind: problem
type: answer
answer: f(n)=\frac{n(n+1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=40215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is easy to compute the value of the function

$$
f(n)=1+2+3+\ldots+n
$$

for successive values of $n: f(1)=1, f(2)=3$, etc.; using this computation for several (how many?) values of $n$ and the answer to question № 450 (but not using the formula for the sum of an arithmetic progression), prove the identity

$$
1+2+\ldots+n=\frac{n(n+1)}{2}
$$
