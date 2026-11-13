---
tag: MKTRWW19CZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two people play the following game: The first person starts by calling out a number, and the second person, based on their judgment, uses this number to replace one of the small stars in the following expression:
※※※※
$-※ ※ ※ ※$

Then the first person calls out another number, and so on, for a total of 8 times, until all the small stars in the above expression are replaced by numbers. The person calling out the numbers aims to make the difference as large as possible, while the second person aims to make the difference as small as possible.

Prove (1) No matter what numbers the first person calls out, the second person can always arrange the numbers so that the difference does not exceed 4000.
(2) No matter where the second person places the numbers, the first person can always call out numbers such that the difference is not less than 4000.
(6th All-Soviet Union Mathematical Olympiad, 1972)
