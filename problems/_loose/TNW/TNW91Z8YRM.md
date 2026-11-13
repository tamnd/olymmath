---
tag: TNW91Z8YRM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2016293
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36082
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1990
    source: hf-ai-mo-aops
    label: 1990 National High School Mathematics League
---
There are $n$ schools in a city. $i$ th school dispatches $C_i(1\leq C_i\leq39,1\leq i\leq n)$ students to watch a football match. The number of all students $\sum_{i=1}^{n}C_{i}=1990$ . In each line, there are $199$ seats, but students from the same school must sit in the same line. So, how many lines of seats we need to have to make sure all students have a seat.
