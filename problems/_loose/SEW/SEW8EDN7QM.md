---
tag: SEW8EDN7QM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2027278
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38641
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/1999
    source: hf-ai-mo-aops
    label: 1999 Estonia National Olympiad
---
On the squares $a_1, a_2,... , a_8$ of a chessboard there are respectively $2^0, 2^1, ..., 2^7$ grains of oat, on the squares $b8, b7,..., b1$ respectively $2^8, 2^9, ..., 2^{15}$ grains of oat, on the squares $c_1, c_2,..., c_8$ respectively $2^{16}, 2^{17}, ..., 2^{23}$ grains of oat etc. (so there are $2^{63}$ grains of oat on the square $h_1$ ). A knight starts moving from some square and eats after each move all the grains of oat on the square to which it had jumped, but immediately after the knight leaves the square the same number of grains of oat reappear. With the last move the knight arrives to the same square from which it started moving. Prove that the number of grains of oat eaten by the knight is divisible by $3$ .
