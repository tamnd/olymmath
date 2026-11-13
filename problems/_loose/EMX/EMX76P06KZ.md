---
tag: EMX76P06KZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
8-115 Let the bounded integer sequence $a_{1}, a_{2}, a_{3}, \cdots$ satisfy
$$
a_{n}=\frac{a_{n-1}+a_{n-2}+a_{n-3} a_{n-4}}{a_{n-1} a_{n-2}+a_{n-3}+a_{n-4}}, n \geqslant 5 .
$$

Prove that there exists $l \in \mathbb{N}$, such that $a_{l}, a_{l+1}, a_{l+2}, \cdots$ is a periodic sequence.
