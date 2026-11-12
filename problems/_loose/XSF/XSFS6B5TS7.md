---
tag: XSFS6B5TS7
kind: problem
type: answer
answer: M={25;26;27;28;29;30;31},P(x)=x+(x-25)(x-27)(x-28)(x-29)(x-31)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(England, 80). Find at least one set $M$ consisting of 7 consecutive natural numbers, for which there exists a polynomial $P(x)$ of the fifth degree with the following properties:

a) all coefficients of the polynomial $P(x)$ are integers;

b) for five numbers $k \in M$, including the smallest and largest numbers, the equality $P(k)=k$ holds;

c) $P(k)=0$ for one number $k \in M$.
