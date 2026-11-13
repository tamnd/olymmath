---
tag: HFWZ1K32JM
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 2$. Let non-negative real numbers $a_{1}, a_{2}, \cdots, a_{n}$ satisfy
$$
a_{1} \geqslant a_{2} \geqslant \cdots \geqslant a_{n}, a_{1}+a_{2}+\cdots+a_{n}=n .
$$

Find the minimum value of $a_{1}+a_{1} a_{2}+a_{1} a_{2} a_{3}+\cdots+a_{1} a_{2} \cdots a_{n}$.
