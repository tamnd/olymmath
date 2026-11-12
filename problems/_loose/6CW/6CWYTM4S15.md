---
tag: 6CWYTM4S15
kind: problem
type: answer
answer: "0.0456"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The diameters of balls for bearings are controlled as follows: if a ball does not pass through a hole of diameter $d_{1}$, but does pass through a hole of diameter $d_{2}>d_{1}$, then its size is considered acceptable. If either of these conditions is not met, the ball is rejected. It is known that the diameter of the ball is a random variable $X$, distributed according to the normal law, the mathematical expectation of this variable is $a=\left(d_{1}+d_{2}\right) / 2$, and the standard deviation is $\sigma=\left(d_{2}-d_{1}\right) / 4$. Find the probability that a checked ball will be rejected.
