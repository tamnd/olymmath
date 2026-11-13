---
tag: 1XMXF8KZZG
kind: problem
type: answer
answer: "11"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85529
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a top hat, there are a hundred tickets numbered from 1 to 100. You want to have three tickets with the property that each of the three numbers is smaller than the sum of the other two numbers. For example, the three tickets with numbers 10, 15, and 20 would be suitable (since $10<15+20, 15<10+20$, and $20<10+15$), but the tickets with numbers 3, 4, and 7 would not (since 7 is not less than $3+4$). You may (without looking at the numbers) take a number of tickets from the hat.

How many tickets must you take at a minimum to be sure that there are three tickets among them that meet your requirement?
