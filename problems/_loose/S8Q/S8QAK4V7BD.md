---
tag: S8QAK4V7BD
kind: problem
type: answer
answer: "7812500"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's write down the consecutive powers of the number 2:

$2,4,8,16,32,64,128,256,512,1024,2048,4096, \ldots$

It is easy to notice that the last digit in this sequence of numbers repeats periodically with a period of 4:

$$
2,4,8,6,2,4,8,6,2,4,8,6, \ldots
$$

Prove that the last 10 digits in this sequence of numbers, starting from some number, will also repeat periodically. Find the length of the period and the number in the sequence, starting from which the periodicity is observed.
