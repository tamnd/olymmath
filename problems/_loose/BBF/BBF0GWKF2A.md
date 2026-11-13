---
tag: BBF0GWKF2A
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Martina came up with a method for generating a numerical sequence. She started with the number 52. From it, she derived the next term in the sequence as follows: $2^{2}+2 \cdot 5=4+10=14$. Then she continued in the same way and from the number 14, she got $4^{2}+2 \cdot 1=16+2=18$. Each time, she would take a number, detach the digit in the units place, square this detached digit, and add twice the number that remains from the original number after detaching the last digit. What is the 2011th number in this sequence?

(M. Dillingerová)
