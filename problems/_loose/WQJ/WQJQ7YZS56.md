---
tag: WQJQ7YZS56
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h366261
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4567
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206715
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2010
    source: hf-ai-mo-aops
    label: 2010 All-Russian Olympiad
---
In a board school, there are 9 subjects, 512 students, and 256 rooms (two people in each room.) For every student there is a set (a subset of the 9 subjects) of subjects the student is interested in. Each student has a different set of subjects, (s)he is interested in, from all other students. (Exactly one student has no subjects (s)he is interested in.)
Prove that the whole school can line up in a circle in such a way that every pair of the roommates has the two people standing next to each other, and those pairs of students standing next to each other that are not roommates, have the following properties. One of the two students is interested in all the subjects that the other student is interested in, and also exactly one more subject.
