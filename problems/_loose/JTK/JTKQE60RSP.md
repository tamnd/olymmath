---
tag: JTKQE60RSP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a prime $p>3$, positive integers $a_{1}$, $a_{2}, \cdots, a_{p}$ satisfy that for any positive integer $n$, we have
$$
a_{1}^{n}+a_{2}^{n}+\cdots+a_{p}^{n} \equiv 0(\bmod p) .
$$

Prove: $a_{1} \equiv a_{2} \equiv \cdots \equiv a_{p}(\bmod p)$.
