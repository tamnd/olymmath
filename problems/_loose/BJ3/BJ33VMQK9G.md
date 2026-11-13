---
tag: BJ33VMQK9G
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73332
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A way to check if a number is divisible by 7 is to subtract, from the number formed by the remaining digits after removing the units digit, twice the units digit, and check if this number is divisible by 7. For example, 336 is divisible by 7, because $33 - 2 \cdot 6 = 21$ is divisible by 7, but 418 is not because $41 - 2 \cdot 8 = 25$ is not.

a) Use this method to check if 4,578 is divisible by 7.

b) If $A$ and $B$ are digits, how many three-digit numbers of the form $\overline{A B 5}$ are divisible by 7?
