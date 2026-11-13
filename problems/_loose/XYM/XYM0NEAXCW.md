---
tag: XYM0NEAXCW
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A numerical sequence is called a SEQUENLADA when, starting from the second number, the next element is formed by the rules:

I) if it has more than 2 digits, the last digit is moved to the $1 \underline{st}$ position and then the two last digits are added;

II) if it has two digits, these 2 are added until a single digit is obtained.

The sequence ends when we reach a number with only one digit. An example of a SEQUENLADA is:

$$
