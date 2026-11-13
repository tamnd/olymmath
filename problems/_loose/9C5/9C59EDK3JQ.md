---
tag: 9C59EDK3JQ
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following $100$ numbers are written on the board: $$2^1 - 1, 2^2 - 1, 2^3 - 1, \dots, 2^{100} - 1.$$

Alice chooses two numbers $a,b,$ erases them and writes the number $\dfrac{ab - 1}{a+b+2}$ on the board. She keeps doing this until a single number remains on the board.

If the sum of all possible numbers she can end up with is $\dfrac{p}{q}$ where $p, q$ are coprime, then what
is the value of $\log_{2}(p+q)$?
