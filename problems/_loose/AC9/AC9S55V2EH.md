---
tag: AC9S55V2EH
kind: problem
type: answer
answer: v_{k+2p}=v_{k}+v_{k+p}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that in any $p$-arithmetic Fibonacci sequence

$$
v_{0}, v_{1}, v_{2}, \ldots, v_{n}, \ldots
$$

the following equality holds:

$$
v_{k}+v_{k+p}=v_{k+2 p} \text{ (for any } k \text{ ). }
$$
