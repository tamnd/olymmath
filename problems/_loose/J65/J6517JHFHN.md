---
tag: J6517JHFHN
kind: problem
type: answer
answer: "2271380"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A gardener and a woodpecker play the following game in their garden, which is shaped like a $2022 \times 2022$ grid consisting of $2022^{2}$ cells. Two cells are considered neighbors if they share a vertex or an edge. Initially, each cell contains a tree of size 0. Then, on each turn of the game,

$\triangleright$ the gardener chooses a cell; the trees in this cell and its adjacent cells (a total of four to nine cells) all increase in size by 1;

$>$ the woodpecker then chooses four cells; the trees in these cells all decrease in size by 1 (or remain at 0 if the woodpecker has chosen a cell with a tree of size 0).

A tree is said to be resplendent if its size is at least $10^{6}$. Find the largest integer $A$ such that the gardener can ensure, in a finite number of turns, regardless of the woodpecker's choices, that at least $A$ trees are resplendent.
