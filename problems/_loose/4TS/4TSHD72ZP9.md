---
tag: 4TSHD72ZP9
kind: problem
type: answer
answer: (3,8,22),(3,10,14),(4,5,18),(4,6,11),(6,14,82),(6,22,26)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131877
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $x, y, z$, such that: $x y \pmod{z} \equiv y z \pmod{x} \equiv z x \pmod{y} = 2$.
