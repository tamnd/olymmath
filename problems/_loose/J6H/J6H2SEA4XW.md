---
tag: J6H2SEA4XW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33501
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the validity of the following inclusion-exclusion formula for indicators of three events $A, B$, and $C$:

$$
I_{A \cup B \cup C}=I_{A}+I_{B}+I_{C}-\left(I_{A \cap B}+I_{A \cap C}+I_{B \cap C}\right)+I_{A \cap B \cap C} .
$$

Represent the indicator $I_{A_{1} \cup . . . \cup A_{n}}$ of the union of events $A_{1}, \ldots, A_{n}$ in a similar form.
