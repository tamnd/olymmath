---
tag: FY9FVTCNTG
kind: problem
type: answer
answer: (3;13)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182860
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence is given by the formation rule

$$
a_{k}=p \cdot k \cdot(k+1)+1
$$

where $p$ is a prime number and $k>0$. The 7th term is the square of a prime number $P$. Determine all possible pairs $(p ; P)$.
