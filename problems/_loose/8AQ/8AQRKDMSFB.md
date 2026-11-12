---
tag: 8AQRKDMSFB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the school, $2 n$ subjects are studied. All students receive grades of 4 and 5. No two students have the same grades, and it cannot be said that one student performs better than another. Prove that the number of students in the school is no more than $C_{2 n}^{n}$.

(We consider that student $p$ performs better than student $q$ if $p$'s grades in all subjects are not lower than $q$'s, and in some subjects, they are higher.)
