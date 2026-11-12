---
tag: Q7RWQSXB8Z
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya thinks of a four-digit number of the form $\overline{20 * *}$.

Vasya sequentially checks if the number Petya thought of is divisible by 1, 3, 5, 7, 9, 11, and if it is, Vasya pays Petya 1, 3, 5, 7, 9, or 11 rubles respectively. For example, for the number 2000, Vasya would have paid Petya $1+5=6$ rubles.

What is the maximum number of rubles Petya can receive?
