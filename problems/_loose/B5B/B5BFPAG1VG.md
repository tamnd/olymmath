---
tag: B5BFPAG1VG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90912
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0009.parquet#row=27
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Mr. Murgatroyd decides to throw his class a pizza party, but he's going to make them hunt for it first. He chooses eleven locations in the school, which we'll call $1,2, \ldots, 11$. His plan is to tell students to start at location 1 , and at each location $n$ from 1 to 10 , they will find a message directing them to go to location $n+1$; at location 11 , there's pizza!

Mr. Murgatroyd sends his teaching assistant to post the ten messages in locations 1 to 10. Unfortunately, the assistant jumbles up the message cards at random before posting them. If the students begin at location 1 as planned and follow the directions at each location, show that they will still get to the pizza.
