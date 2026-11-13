---
tag: Z6YEH5ZM77
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(a_{n}\right)$ is defined recursively as follows:

$$
a_{1}=1, a_{2}=3, a_{n}=a_{n-1}+a_{n-2} \text { for } n \geq 3
$$

Prove that the inequality $a_{n}<\left(\frac{7}{4}\right)^{n}$ holds for all $n \in \mathbb{N}$.
