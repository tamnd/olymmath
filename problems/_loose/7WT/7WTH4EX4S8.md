---
tag: 7WTH4EX4S8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Hong Kong Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2926852
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=734
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2023
    source: hf-ai-mo-aops
    label: 2023 Hong Kong Team Selection Test
---
Mandy needs to wake up early for attending a mathematics contest. She has set an alarm in her smartphone every 15 minutes since 5:30 am. If an alarm is not pressed off by her or her mother (or anything else), it will ring for a while, stop for a while, then will ring again 9 minutes later as the first ring, and so on (e.g. if the first alarm is not pressed off, it will ring again at 5:39 am). Also each alarm will work independently. Now suppose each ring-tone lasts for $x$ minutes, and the smartphone has eventually rung for 50 minutes before Mandy wakes up at 6:30 am (assume no one has pressed off any alarm before that). Find the value of $x$ .
