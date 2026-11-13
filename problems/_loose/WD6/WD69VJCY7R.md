---
tag: WD69VJCY7R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Adam the spider is sitting at the bottom left of a 4 × 4 coordinate grid, where adjacent parallel grid lines are each separated by one unit. He wants to crawl to the top right corner of the square, and starts off with 9 "crumb's" worth of energy. Adam only walks in one-unit segments along the grid lines, and cannot walk off of the grid.
Walking one unit costs him one crumb's worth of energy, and Adam cannot move anymore once he runs out of energy. Also, Adam stops moving once he reaches the top right corner.
There is also a single crumb on the grid located one unit to the right and one unit up from Adam's starting position. If he goes to this point and eats the crumb, he will gain one crumb's worth of energy.
How many paths can Adam take to get to the upper right corner of the grid? Note that Adam does not care if he has extra energy left over once he arrives at his destination.
