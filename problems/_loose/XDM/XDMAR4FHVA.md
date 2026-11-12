---
tag: XDMAR4FHVA
kind: problem
type: answer
answer: \frac{n}{2n-1}>\frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Successful Pairs. Vasya bought $n$ pairs of identical socks. For $n$ days, Vasya had no problems: every morning he took a new pair from the closet and wore it all day. After $n$ days, Vasya's mother washed all the socks in the washing machine and paired them up as they came out, since, to reiterate, the socks are identical. We will call a pair of socks successful if both socks in this pair were worn by Vasya on the same day.

a) (7 - $\mathbf{1 1}$ classes, 2 points) Find the probability that all the resulting pairs are successful.

b) (8 - $\mathbf{1 1}$ classes, 3 points) Prove that the expected number of successful pairs is greater than 0.5.
