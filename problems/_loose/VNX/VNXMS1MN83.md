---
tag: VNXMS1MN83
kind: problem
type: answer
answer: "911"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=320
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-wmo
    source: hf-mathnet
    label: China China Western Mathematical Olympiad
---
There are $n$ ($n > 12$) students participating in a mathematics contest. The examination paper consists of 15 fill-in-the-blank questions. For each question, the score of a correct answer is 1 point, and no point will be awarded if the answer is wrong or left blank. After analyzing all the possible cases of score distributions of these $n$ students, one finds out that if the sum of total scores of any 12 students is not less than 36 points, then there are at least 3 students among these $n$ students who answer at least 3 identical questions correctly. Determine the smallest possible value of $n$. (Posed by Liu Shixiong)
