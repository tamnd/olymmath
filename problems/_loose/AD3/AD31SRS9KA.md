---
tag: AD31SRS9KA
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=21466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya thought of a 9-digit number obtained by rearranging the digits of the number 123456789. Vitya is trying to guess it. For this, he chooses any 9-digit number (possibly with repeated digits and zeros) and tells it to Petya, who then responds with how many digits of this number match the ones in his thought number. Can Vitya find out the first digit of Petya's number in no more than 4 moves? (A match is a digit standing in the same place.)
