---
tag: HTQP25X2T3
kind: problem
type: answer
answer: "97020"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The two-variable function $f(x, y)$ defined on natural numbers satisfies the following conditions:

$$
f(x, x)=x
$$

$$
f(x, y)=f(y, x)
$$

$$
(x+y) \cdot f(x, y)=f(x, x+y) \cdot y
$$

What is $f(980,1980)$?
