---
tag: 77PC8DH3VR
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $a, b$ satisfying: $(a, b)=1$, and there exists a prime $p$ and an integer $c$, such that the congruence equation $x^{a}+y^{b} \equiv c(\bmod p)$ has no integer solutions. Find the minimum possible value of $a+b$.
