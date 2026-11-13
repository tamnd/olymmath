---
tag: 4SDMWMKCFK
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75762
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any natural number $n$, let us form all possible "words" of length $n$ from the letters $A$ and $B$, and let $p_{n}$ denote the number of those words that do not contain the quadruple $AAAA$ of consecutive letters $A$, nor the triple $BBB$ of consecutive letters $B$. Determine the value of the expression

$$
\frac{p_{2004}-p_{2002}-p_{1999}}{p_{2001}+p_{2000}}
$$

(R. Kučera)
