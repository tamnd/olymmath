---
tag: DTCRYRWX57
kind: problem
type: answer
answer: \frac{1}{2}<1-\frac{\sqrt{3}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We select two points independently at random on the interval $(0,1)$ of the number line. (By saying that a point $P$ is chosen at random on the segment $(a, b)$, we mean that the probability that $P$ falls within any subinterval $(c, d)$ is $\frac{d-c}{b-a}$.)

We know about a number $h$ that the probability that the distance between the two chosen points is less than $h$ lies between $\frac{1}{4}$ and $\frac{3}{4}$.

What are the bounds within which $h$ lies?
