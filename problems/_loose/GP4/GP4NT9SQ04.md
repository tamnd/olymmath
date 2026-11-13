---
tag: GP4NT9SQ04
kind: problem
type: answer
answer: a_{n}=\prod_{k=1}^{n}(2^{k}-1)^{2},n=1,2,3,\cdots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
8-27 Let the sequence of positive numbers $a_{0}, a_{1}, a_{2}, \cdots$ satisfy $a_{0}=a_{1}=1$ and
$$
\sqrt{a_{n} a_{n-2}}-\sqrt{a_{n-1} a_{n-2}}=2 a_{n-1}, n=2,3, \cdots
$$

Find the general term formula of the sequence.
