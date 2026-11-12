---
tag: JMG446YEPW
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ilya takes a triplet of numbers and transforms it according to the rule: at each step, each number is replaced by the sum of the other two. What is the difference between the largest and the smallest numbers in the triplet after 1989 applications of this rule, if the initial triplet of numbers was $\{70 ; 61; 20\}$? If the question allows multiple answers, write them without spaces in ascending order.
