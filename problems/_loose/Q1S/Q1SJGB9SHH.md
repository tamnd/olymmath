---
tag: Q1SJGB9SHH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213426
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are two math exams called A and B. 2014 students took the A exam and/or the B exam. Each student took one or both exams, so the total number of exam papers was between 2014 and 4028, inclusive. The score for each exam is an integer from 0 through 40. The average score of all the exam papers was 20. The grade for a student is the best score from one or both exams that she took. The average grade of all 2014 students was 14. Let $G$ be the *greatest* possible number of students who took both exams. Let $L$ be the *least* possible number of students who took both exams. Compute $G - L$.
