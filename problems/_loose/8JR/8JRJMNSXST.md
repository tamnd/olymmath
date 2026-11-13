---
tag: 8JRJMNSXST
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h86782
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55870
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2006
    source: hf-ai-mo-aops
    label: 2006 All-Russian Olympiad
---
A $100\times 100$ chessboard is cut into dominoes ( $1\times 2$ rectangles). Two persons play the following game: At each turn, a player glues together two adjacent cells (which were formerly separated by a cut-edge). A player loses if, after his turn, the $100\times 100$ chessboard becomes connected, i. e. between any two cells there exists a way which doesn't intersect any cut-edge. Which player has a winning strategy - the starting player or his opponent?
