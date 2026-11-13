---
tag: B79F1EKXXK
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83240
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the minimum of the function

$$
f(x)=\frac{\cos (x)^{3}}{\sin (x)}+\frac{\sin (x)^{3}}{\cos (x)}
$$

on $] 0, \pi / 2[$.

Theorem 1.70 (Tchebycheff's Inequality). With the same notations as before, if the $a_{i}$ and the $b_{i}$ are arranged in the same order, then

$$
\sum a_{i} b_{i} \geq \frac{1}{n}\left(\sum a_{i}\right)\left(\sum b_{i}\right)
$$
