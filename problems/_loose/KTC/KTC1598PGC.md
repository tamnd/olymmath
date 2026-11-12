---
tag: KTC1598PGC
kind: problem
type: answer
answer: 100(+1)+25
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Maurice always disappointed his teachers, especially his math teachers. However, when he needed to calculate the square of 35, or 75, or finally 85, he always gave the correct answer in one second. The thing is, he had one trick up his sleeve that he was very proud of: to determine the square of any two-digit number ending in 5, he first multiplied the tens digit by the same number increased by 1, and then appended 25 to the number obtained. For example, when calculating $ (75)^2 $, he wrote " $ (7 \times 8) 25 $ " and easily got the desired result: 5625.

Please explain on what Maurice's trick is based?
