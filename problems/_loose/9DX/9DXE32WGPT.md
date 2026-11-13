---
tag: 9DXE32WGPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence of integers, $\{a_{n}\}_{n \ge 1}$ with $a_{1}>0$, is defined by $$a_{n+1}=\frac{a_{n}}{2}\;\; \text{if}\; n \equiv 0 \; \pmod{4},$$ $$a_{n+1}=3 a_{n}+1 \;\; \text{if}\; n \equiv 1 \pmod{4},$$ $$a_{n+1}=2 a_{n}-1 \;\; \text{if}\; n \equiv 2 \pmod{4},$$ $$a_{n+1}=\frac{a_{n}+1}{4}\;\; \text{if}\; n \equiv 3 \pmod{4}.$$ Prove that there is an integer $m$ such that $a_{m}=1$.
