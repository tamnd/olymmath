---
tag: T17M3DS4NK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89814
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The headquarters of two companies are located at points 1000 kilometers apart. At $n$ points along the line between them, there is one mathematician at each point. Every second, all mathematicians move simultaneously-each one goes to the midpoint of the segment connecting them to the nearest person (another mathematician or a director). If such a person is not unique, they choose one arbitrarily. If two mathematicians end up at the same point in this way, the younger one leaves permanently.

Prove that after a finite number of seconds, each of the remaining mathematicians will be able to shake hands with one of the directors. A mathematician can shake hands with a director if they are no more than 1 meter apart.
