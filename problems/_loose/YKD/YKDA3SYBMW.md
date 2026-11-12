---
tag: YKDA3SYBMW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25537
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any natural number $n$ and any real number $a$, the inequality

$$
|a||a-1||a-2| \ldots|a-n| \geqslant\langle a\rangle \frac{n!}{2^{n}}
$$

holds, where $\langle a\rangle$... is the distance from the number $a$ to the nearest integer to it, $n!=1,2, \ldots, n$.
