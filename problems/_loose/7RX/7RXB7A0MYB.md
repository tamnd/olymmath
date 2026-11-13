---
tag: 7RXB7A0MYB
kind: problem
type: answer
answer: "12843"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Say that a positive integer is MPR (Math Prize Resolvable) if it can be represented as the sum of a 4-digit number MATH and a 5-digit number PRIZE. (Different letters correspond to different digits. The leading digits M and P can't be zero.) Say that a positive integer is MPRUUD (Math Prize Resolvable with Unique Units Digits) if it is MPR and the set of units digits $\{ \mathrm{H}, \mathrm{E} \}$ in the definition of MPR can be uniquely identified. Find the smallest positive integer that is MPR but not MPRUUD.
