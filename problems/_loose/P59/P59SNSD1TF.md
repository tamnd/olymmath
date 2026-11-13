---
tag: P59SNSD1TF
kind: problem
type: answer
answer: 15,15,15,15,15,15,11,1,11,15
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188989
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Martha is playing a computer game called "Destroy the Balloons". In each move, Martha can destroy exactly 1, 11, 15, or 27 balloons. At the same time, if she destroys 1 balloon, exactly 10 new balloons appear on the screen; if she destroys 11 balloons, exactly 8 new balloons appear; if she destroys 15 balloons, no new balloons appear; and if she destroys 27 balloons, exactly 36 new balloons appear. Martha wins if she destroys all the balloons on the screen. If there were 102 balloons on the screen at the beginning, can Martha win?
