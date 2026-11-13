---
tag: 3JDMSMR82P
kind: problem
type: answer
answer: "0.3151"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the probability that a point randomly taken within a square is at most as far from all four corners of the square as the side of the square?[^0]

[^0]: ${ }^{1}$ The probability that a point $P$ taken within a closed area $S$ is in a closed sub-area $s$ that is completely within $S$, is equal to the fraction $\frac{s}{S}$, regardless of the position of $P$.
