---
tag: MAZX4X31H2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216029
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On each square of an $n$x$n$ board sleeps a dragon. Two dragons are called neighbors if their squares have a side in common. Each turn, Minnie wakes up a dragon which has a living neighbor and Max directs it towards one of its living neighbors. The dragon than breathes fire on that neighbor and destroys it, and then goes back to sleep.

Minnie's goal is to minimize the snoring of the dragons and leave as few living dragons as possible. Max is a member of PETD (People for the Ethical Treatment of Dragons), and he wants to save as many dragons as he can.

How many dragons will stay alive at the end if

1. $n=4$?
2. $n=5$?
