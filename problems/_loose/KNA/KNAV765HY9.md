---
tag: KNAV765HY9
kind: problem
type: answer
answer: "560"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the sequence of results from tossing a coin, one can count the number of times a tail is followed by a head (denoted as "tail-head"), a head is followed by a head (denoted as "head-head"), a tail is followed by a tail (denoted as "tail-tail"), and a head is followed by a tail (denoted as "head-tail"). For example, the result sequence of 15 coin tosses is: head-head-tail-tail-head-head-head-head-tail-head-head-tail-tail-tail-tail, which contains 5 "head-head", 3 "head-tail", 2 "tail-head", and 4 "tail-tail". If a coin is tossed 15 times, how many different result sequences are there, each of which has exactly 2 "head-head", 3 "head-tail", 4 "tail-head", and 5 "tail-tail"?
(4th American Invitational Mathematics Examination Question)
