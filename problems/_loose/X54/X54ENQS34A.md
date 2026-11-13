---
tag: X54ENQS34A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A hunter and an invisible rabbit play on an infinite square grid, meaning each cell has four neighbors: left, right, up, and down. First, the hunter colors each cell of the grid, but can only use a finite number of colors. The rabbit then chooses a cell on the grid, which will be its starting point. It then begins to move: each minute, it tells the hunter the color of the cell it is on, and then moves to one of the four adjacent cells. Of course, since it is invisible, the only information the hunter has access to are the colors the rabbit announces each minute just before moving.

The hunter wins if, after a finite time,

$\triangleright$ he can identify the cell the rabbit initially chose, or if

$\triangleright$ the rabbit returns to a cell it had previously visited.

Does the hunter have a winning strategy?
