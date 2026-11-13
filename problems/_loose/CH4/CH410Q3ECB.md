---
tag: CH410Q3ECB
kind: problem
type: answer
answer: "201"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A blue square of side length $10$ is laid on top of a coordinate grid with corners at $(0,0)$, $(0,10)$, $(10,0)$, and $(10,10)$. Red squares of side length $2$ are randomly placed on top of the grid, changing the color of a $2\times2$ square section red. Each red square when placed lies completely within the blue square, and each square's four corners take on integral coordinates. In addition, randomly placed red squares may overlap, keeping overlapped regions red. Compute the expected value of the number of red squares necessary to turn the entire blue square red, rounded to the nearest integer.
