---
tag: ABXMYGRZ69
kind: problem
type: answer
answer: "270"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=156461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $U_{1}, U_{2}, U_{3}, \ldots$ is defined as follows:
- $U_{1}=2$;
- if $U_{n}$ is prime then $U_{n+1}$ is the smallest positive integer not yet in the sequence;
- if $U_{n}$ is not prime then $U_{n+1}$ is the smallest prime not yet in the sequence.
The integer $k$ is the smallest such that $U_{k+1}-U_{k}>10$.
What is the value of $k \times U_{k}$ ?
