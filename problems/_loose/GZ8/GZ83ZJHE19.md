---
tag: GZ83ZJHE19
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ people sitting at a round table. In the beginning, everyone writes down a positive number $n$ on piece of paper in front of them. From now on, in every minute, they write down the number that they get if they subtract the number of their right-hand neighbour from their own number. They write down the new number and erase the original. Give those number $n$ that there exists an integer $k$ in a way that regardless of the starting numbers, after $k$ minutes, everyone will have a number that is divisible by $n$.
