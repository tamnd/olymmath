---
tag: J5WB1M88QN
kind: problem
type: answer
answer: "0.1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A Christmas tree was decorated with 100 bulbs in a row. Then the bulbs started switching according to the following algorithm: all bulbs lit up, after a second every second bulb turned off, after another second every third bulb switched: if it was on, it turned off and vice versa. After a second, every fourth bulb switched, then every fifth bulb after another second, and so on. After 100 seconds, everything was over. Find the probability that a randomly chosen bulb is on after this (the bulbs do not burn out or break).
