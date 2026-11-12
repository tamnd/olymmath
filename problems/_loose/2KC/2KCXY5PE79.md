---
tag: 2KCXY5PE79
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Computers $1,2,3, \ldots, 100$ are connected in a ring (the first with the second, the second with the third, ..., the hundredth with the first). Hackers have prepared 100 viruses, numbered them, and at different times, in a random order, they launch each virus on the computer with the same number. If a virus lands on an uninfected computer, it infects it and moves to the next computer in the chain with a higher number until it reaches an already infected computer (from computer 100, the virus moves to computer 1). Then the virus dies, and this computer is restored. No two viruses land on the same computer at the same time. How many computers will be infected as a result of the attack by these 100 viruses?
