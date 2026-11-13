---
tag: 1RJNFWA5KJ
kind: problem
type: answer
answer: M divides N
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=88
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2011
    source: hf-mathnet
    label: Croatia CroatianCompetitions2011
---
Let $M$ and $N$ be positive integers. Consider an $N \times N$ square array consisting of $N^2$ lamps that can be in two states - on or off. At the beginning all lamps are turned off.
A *move* consists of choosing a row or a column of the array and changing the state of $M$ consecutive lamps in the chosen row or column, i.e. turning on the lamps that are turned off and vice versa.
Determine the necessary and sufficient condition for which it can be achieved that after a finite number of moves all lamps are turned on. (Tonći Kokan)
