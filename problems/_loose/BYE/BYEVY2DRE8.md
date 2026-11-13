---
tag: BYEVY2DRE8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=70567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of natural numbers $a_{n}$ is constructed as follows: $a_{0}$ is some natural number;

$a_{n+1}=1 / 5 a_{n}$, if $a_{n}$ is divisible by 5;

$a_{n+1}=\left[\sqrt{5} a_{n}\right]$, if $a_{n}$ is not divisible by 5. Prove that starting from some term, the sequence $a_{n}$ increases.
