---
tag: 4WJ7MDF0HS
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To state the addition theorem of probabilities for three joint events:

$$
\begin{aligned}
& P(A+B+C)=P(A)+P(B)+P(C)- \\
& -P(A B)-P(A C)-P(B C)+P(A B C)
\end{aligned}
$$

It is assumed that the addition theorem for two joint events has already been proven:

$$
P\left(A_{1}+A_{2}\right)=P\left(A_{1}\right)+P\left(A_{2}\right)-P\left(A_{1} A_{2}\right)
$$
