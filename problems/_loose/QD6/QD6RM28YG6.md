---
tag: QD6RM28YG6
kind: problem
type: answer
answer: S_{n}=a_{1}^{\lgx}\frac{(\frac{a_{2}}{a_{1}})^{n\lgx}-1}{(\frac{a_{2}}{a_{1}})^{\lgx}-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find the sum of the following series:

$$
S_{n}=x^{\lg a_{1}}+x^{\lg a_{2}}+\ldots+x^{\lg a_{n}}
$$

where $x$ is a positive number different from 1, and $a_{1}, a_{2}, \ldots, a_{n}$ are distinct positive numbers that form a geometric sequence.
