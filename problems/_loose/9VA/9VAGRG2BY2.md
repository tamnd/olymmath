---
tag: 9VAGRG2BY2
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A quadruple of natural numbers $(a, b, c, d)$ is called green if

$$
b=a^{2}+1, c=b^{2}+1, d=c^{2}+1
$$

and $D(a)+D(b)+D(c)+D(d)$ is odd, where $D(k)$ is the number of positive divisors of the natural number $k$.

How many green quadruples are there whose all members are less than 1000000?
