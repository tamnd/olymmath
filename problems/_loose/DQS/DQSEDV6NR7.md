---
tag: DQSEDV6NR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Israel National Olympiad (Gillis)
    url: https://artofproblemsolving.com/community/c6h3212279
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1823
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: il-gillis/2024
    source: hf-ai-mo-aops
    label: 2024 Israel National Olympiad (Gillis)
---
A rook stands in one cell of an infinite square grid. A different cell was colored blue and mines were placed in $n$ additional cells: the rook cannot stand on or pass through them. It is known that the rook can reach the blue cell in finitely many moves. Can it do so (for every $n$ and such a choice of mines, starting point, and blue cell) in at most**(a)** $1.99n+100$ moves?**(b)** $2n-2\sqrt{3n}+100$ moves?**Remark.** In each move, the rook goes in a vertical or horizontal line.
