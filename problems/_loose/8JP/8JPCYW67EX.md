---
tag: 8JPCYW67EX
kind: problem
type: answer
answer: "165"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2100
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In city "N", there are 12 horizontal and 16 vertical streets, of which a pair of horizontal and a pair of vertical streets form the rectangular boundary of the city, while the rest divide it into blocks that are squares with a side length of 100m. Each block has an address consisting of two integers $(i ; j), i=1,2, . ., 11, j=1,2, \ldots, 15-$ the numbers of the streets that bound it from below and from the left. Taxis transport passengers from one block to another, adhering to the following rules: 1) pick-up and drop-off can be made at any point on the boundary of the block at the passenger's request; 2) it is forbidden to enter inside the block; 3) transportation is carried out along the shortest path; 4) a fee of 1 coin is charged for every 100m traveled (rounding the distance to the nearest 100m in favor of the driver). How many blocks are there in the city? What is the maximum and minimum fare that a driver can charge a passenger for a ride from block $(7,2)$ to block $(2 ; 1)$ without violating the rules?
