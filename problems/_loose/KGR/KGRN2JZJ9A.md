---
tag: KGRN2JZJ9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162873
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a row, there are $n$ lights, $n \geq 3$, numbered with numbers from 1 to $n$. Initially, each odd-numbered light in the row is on, and each even-numbered light is off. In each move, we can simultaneously change the state of three consecutive lights in the row (turning off the ones that are on, and turning on the ones that are off).

(a) Prove that the order of performing the moves to reach the final state of the lights is not important.

(b) For which numbers $n$ can we reach a state in a finite number of moves where each odd-numbered light in the row is off, and each even-numbered light is on?
