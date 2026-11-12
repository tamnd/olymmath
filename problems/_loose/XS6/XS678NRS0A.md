---
tag: XS678NRS0A
kind: problem
type: answer
answer: "2018"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4794
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of polynomials is defined by the conditions:

$$
P_{0}(x)=1, P_{1}(x)=x, P_{n+1}(x)=x P_{n}(x)-P_{n-1}(x), n=1,2, \ldots
$$

How many distinct real roots does the polynomial $P_{2018}(x)$ have?
