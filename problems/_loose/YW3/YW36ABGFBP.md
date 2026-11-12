---
tag: YW36ABGFBP
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16762
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a country, there are 100 cities. Between any two cities, there is either no connection, or there is an air route, or there is a railway (both air routes and railways cannot exist simultaneously). It is known that if two cities are connected to a third city by railway, then there is an air route between them, and if two cities are connected to a third city by air routes, then there is a railway between them. Due to a natural disaster, all flights in the country have been canceled. The government has decided to place humanitarian aid centers in some cities, such that from each city, it is possible to reach such a center. Prove that at least 20 such centers need to be opened.
