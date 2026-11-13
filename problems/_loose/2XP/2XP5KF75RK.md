---
tag: 2XP5KF75RK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2722701
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34322
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233151
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/1990
    source: hf-ai-mo-aops
    label: 1990 Chile National Olympiad
---
It is about deciphering the code $C_1C_2C_3C_4$ in which each letter is one of the colors: white $(B)$ , blue $(A)$ , red $(R)$ , green $(V)$ , black $(N)$ and brown $(C)$ with allowed repetitions. Four were made attempts to decipher it. $NAVB$ and $ACRC$ have two color hits, but in wrong places. $RBAC$ and $VRBA$ have one color match in the correct place, and two other color matches, in places incorrect. Determine all combinations compatible with the information.
