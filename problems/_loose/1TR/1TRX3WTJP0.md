---
tag: 1TRX3WTJP0
kind: problem
type: answer
answer: "9"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Mate and Roko, while preparing for a competition, were challenging each other with "unsolvable" problems. So Roko asked Mate: Do you know what the sum of the digits of the number $3^{2018}$ is?

To this, Mate replied with a new question:

I don't know, but do you know what the 2018th number is if you continue the sequence where the first number is $3^{2018}$, the second number is the sum of its digits, the third number is the sum of the digits of the second number, and so on? Each subsequent number in this sequence is equal to the sum of the digits of the previous number!

Show that Mate's question is solvable and determine the 2018th number in this sequence.
