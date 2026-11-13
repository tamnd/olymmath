---
tag: VJBVYAJ6XS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218419
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(a_{n}\right)_{n\in\mathbb{N}}$ is defined recursively as $a_{0}=a_{1}=1$, $a_{n+2}=5a_{n+1}-a_{n}-1$, $\forall n\in\mathbb{N}$
Prove that
$$a_{n}\mid a_{n+1}^{2}+a_{n+1}+1$$
for any $n\in\mathbb{N}$
