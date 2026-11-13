---
tag: 6H6VRAD0TJ
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $a_n$ is defined by
$$a_0=0, a_1=3;$$$$a_n=8a_{n-1}+9a_{n-2}+16\text{ for }n\ge2.$$Find the least positive integer $h$ such that $a_{n+h}-a_n$ is divisible by $1999$ for all $n\ge0$.
