---
tag: VP20G49QHY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162363
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2019
    source: hf-mathnet
    label: Balkan Mathematical Olympiad BMO 2019 Shortlist
---
Anna and Bob play a game on the set of all points of the form $(m, n)$ where $m, n$ are integers with $|m|,|n| \leqslant 2019$. Let us call the lines $x= \pm 2019$ and $y= \pm 2019$ the boundary lines of the game. The points of these lines are called the boundary points. The neighbours of point $(m, n)$ are the points $(m+1, n),(m-1, n),(m, n+1),(m, n-1)$.

Anna starts with a token at the origin ( 0,0 ). With Bob playing first, they alternately perform the following steps: At his turn, Bob deletes two points on each boundary line. On her turn Anna makes a sequences of three moves of the token, where a move of the token consists of picking up the token from its current position and placing it in one of its neighbours.

To win the game Anna must place her token on a boundary point before it is deleted by Bob. Does Anna have a winning strategy?

[Note: At every turn except perhaps her last, Anna must make exactly three moves.]
