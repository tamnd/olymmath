---
tag: XJGGKDX2FK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A natural number $a$ is given. The sequence ( $a_{n}$ ) is defined by $a_{0}=a$, and if

$$
a_{n}=c_{0}+10 c_{1}+\ldots+10^{k} c_{k}
$$

where $c_{0}, c_{1}, \ldots, c_{k} \in\{0,1,2, \ldots, 9\}$, then

$$
a_{n+1}=2 c_{0}+c_{1}+10 c_{2}+\ldots+10^{k-1} c_{k}
$$

Which numbers in the sequence $\left(a_{n}\right)$ appear infinitely many times?
