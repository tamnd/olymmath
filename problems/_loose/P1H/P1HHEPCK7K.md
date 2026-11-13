---
tag: P1HHEPCK7K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130021
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A kingdom consists of 12 cities located on a one-way circular road. A magician comes on the 13th of every month to cast spells. He starts at the city which was the 5 th down the road from the one that he started at during the last month (for example, if the cities are numbered 1-12 clockwise, and the direction of travel is clockwise, and he started at city \#9 last month, he will start at city \#2 this month). At each city that he visits, the magician casts a spell if the city is not already under the spell, and then moves on to the next city. If he arrives at a city which is already under the spell, then he removes the spell from this city, and leaves the kingdom until the next month. Last Thanksgiving the capital city was free of the spell. Prove that it will be free of the spell this Thanksgiving as well.
