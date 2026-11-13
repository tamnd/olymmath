---
tag: E2QZ1WW7JH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Greece Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2031842
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18821
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2020
    source: hf-ai-mo-aops
    label: 2020 Greece Junior Math Olympiad
---
We are having 99 equal circles in a row and in the interior, we write inside them all the numbers from 1 up to 99 (one number in each circle).We color each of the circles with one of the two colors available: red and green.
A coloring is good if it has the ability:
Red circles lying in the interval of the numbers from 1 up to 50 are more than the red circles lying in the interval of the numbers from 51 up to 99 .
a) Find how many different colorings can be constructed.
b) Find how many different good colorings can be constructed.
(Note: Two colorings are different, if they have different color in at least one of their circles.)
