---
tag: A61X9JVJNF
kind: problem
type: answer
answer: "1969"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for a natural number $n$ with a four-digit decimal representation, which has the following properties:

1. Its cross sum is an odd square number.
2. It is the product of exactly two different prime numbers.
3. The sum of the two prime numbers is ten times the number obtained by removing the units digit and the tens digit from the number $n$.
4. The difference between one prime factor and ten times the other is equal to the number obtained by removing the hundreds digit and the thousands digit from the number $n$.
