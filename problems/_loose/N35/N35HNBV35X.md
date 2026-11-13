---
tag: N35HNBV35X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Towers grow at points along a line. All towers start with height 0 and grow at the rate of one meter per second. As soon as any two adjacent towers are each at least 1 meter tall, a new tower begins to grow at a point along the line exactly half way between those two adjacent towers. Before time 0 there are no towers, but at time 0 the first two towers begin to grow at two points along the line. Find the total of all the heights of all towers at time 10 seconds.
