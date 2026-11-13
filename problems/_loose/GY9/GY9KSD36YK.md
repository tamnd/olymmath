---
tag: GY9KSD36YK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h3181585
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32480
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2023
    source: hf-ai-mo-aops
    label: 2023 Brazil National Olympiad
---
Let $n$ be a positive integer. Humanity will begin to colonize Mars. The SpaceY and SpaceZ agencies will be responsible for traveling between the planets. To prevent the rockets from colliding, they will travel alternately, with SpaceY making the first trip. On each trip, the responsible agency will do one of two types of mission:

(i) choose a positive integer $k$ and take $k$ people to Mars, creating a new colony on the planet and settling them in that colony;

(ii) choose some existing colony on Mars and a positive integer $k$ strictly smaller than the population of that colony, and bring $k$ people from that colony back to Earth.

To maintain the organization on Mars, a mission cannot result in two colonies with the same population and the number of colonies must be at most $n$ . The first agency that cannot carry out a mission will go bankrupt. Determine, in terms of $n$ , which agency can guarantee that it will not go bankrupt first.
