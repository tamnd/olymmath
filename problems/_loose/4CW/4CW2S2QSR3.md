---
tag: 4CW2S2QSR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h512825
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8389
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
In chess, there are two types of minor pieces, the bishop and the knight. A bishop may move along a diagonal, as long as there are no pieces obstructing its path. A knight may jump to any lattice square $\sqrt{5}$ away as long as it isn't occupied.

One day, a bishop and a knight were on squares in the same row of an infinite chessboard, when a huge meteor storm occurred, placing a meteor in each square on the chessboard independently and randomly with probability $p$ . Neither the bishop nor the knight were hit, but their movement may have been obstructed by the meteors.

The value of $p$ that would make the expected number of valid squares that the bishop can move to and the number of squares that the knight can move to equal can be expressed as $\frac{a}{b}$ for relatively prime positive integers $a, b$ . Compute $100a + b$ .

*Proposed by Lewis Chen*
