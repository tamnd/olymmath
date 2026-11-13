---
tag: 7JGNE1CMZ2
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO Preliminary Selection Contest — Hong Kong
---
There are 20 students in a class, numbered $1$ to $20$. They have taken a test with $n$ questions. After the test, the teacher tried to pick some students to draft the solutions, and as such it is necessary that the picked students together can solve all questions. The teacher found that this can be only done by choosing all students whose class numbers are even, or all students whose class numbers are multiples of $5$, or any combination that includes all students from one of the two groups mentioned above. Find the smallest possible value of $n$.
