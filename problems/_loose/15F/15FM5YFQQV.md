---
tag: 15FM5YFQQV
kind: problem
type: answer
answer: "60"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ 30$ students participated in the mathematical Olympiad. Each of them was given $ 8$ problems to solve. Jury estimated their work with the following rule:
1) Each problem was worth $ k$ points, if it wasn't solved by exactly $ k$ students;
2) Each student received the maximum possible points in each problem or got $ 0$ in it;
Lasha got the least number of points. What's the maximal number of points he could have?
Remark: 1) means that if the problem was solved by exactly $ k$ students, than each of them got $ 30 - k$ points in it.
