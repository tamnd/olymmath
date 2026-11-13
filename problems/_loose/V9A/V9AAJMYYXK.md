---
tag: V9AAJMYYXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a boarding school, there are 512 students living in 256 dormitory rooms, with each room housing two students who are called roommates. It is known that these students have chosen 9 courses in total, and no two students have chosen exactly the same set of courses. Prove: All students can be arranged in a circle, satisfying:
(1) Any two roommates are adjacent;
(2) For any two non-roommates who are adjacent, one student's chosen courses are a subset of the other's, and differ by exactly one course.
