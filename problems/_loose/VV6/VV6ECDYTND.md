---
tag: VV6ECDYTND
kind: problem
type: answer
answer: P_{1}(1-p_{4})+P_{2}(1-p_{5})+P_{3}(1-p_{6})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30399
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A passenger can apply for a ticket at one of three ticket offices. The probabilities of applying to each office depend on their location and are equal to $p_{1}, p_{2}, p_{3}$, respectively. The probability that by the time the passenger arrives, the tickets available in the office will be sold out is $p_{4}$ for the first office, $-p_{5}$ for the second, and $-p_{6}$ for the third. The passenger has set out to buy a ticket. What is the probability that he will purchase a ticket?
