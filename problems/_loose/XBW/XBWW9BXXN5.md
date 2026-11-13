---
tag: XBWW9BXXN5
kind: problem
type: answer
answer: (5a,5,5)forodd,(10a,10,5)forodd,(20b,20,5)forallnaturalb
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87653
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples of natural numbers $(m, n, k)$ for which

$$
D(m, 20)=n, D(n, 15)=k \text { and } D(m, k)=5
$$

where $D(a, b)$ is the greatest common divisor of the numbers $a$ and $b$.
