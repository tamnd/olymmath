---
tag: GXD18CSDCK
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya's favorite TV game is called "Sofa Lottery." During the game, viewers can send SMS messages with three-digit numbers containing only the digits $1, 2, 3$, and 4. At the end of the game, the host announces a three-digit number, also consisting only of these digits. An SMS is considered a winning one if the number in it differs from the host's number by no more than one digit (for example, if the host announced the number 423, then the messages 443 and 123 are winning, but 243 and 224 are not).

Petya wants to send as few messages as possible to ensure that at least one is definitely a winner. How many SMS messages will he have to send? (L. S. Korechkova)
