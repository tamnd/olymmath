---
tag: DMT5VSHTFD
kind: problem
type: answer
answer: "246420"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A necromancer and a paladin combat on a $666 \times 666$ grid. The grid is initially empty. For each turn, the necromancer first chooses a block on the grid, and increases one skeleton in each block within the $3 \times 3$ region centered at the chosen block (which include at most nine blocks); then, the paladin chooses four blocks on the grid, and eliminates one skeleton from each of these blocks (the number of skeletons in each block is a non-negative integer.)
For any turn, we called a block **doomed** if, at the end of that turn, there are $10^6$ or more skeletons in that block. Find the largest positive integer $K$ such that the necromancer has a strategy that guarantees $K$ or more blocks on the grid to be simultaneously doomed in some finite turns, regardless of how the paladin acts.
