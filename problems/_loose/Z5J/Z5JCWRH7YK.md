---
tag: Z5JCWRH7YK
kind: problem
type: answer
answer: (n-1,k-1)=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $n \times k$ chessboard, a bishop is wandering. The bishop starts from one of the light-colored corners and moves diagonally. When it reaches the edge of the board, it "bounces back". The movement ends when it reaches a corner again. For which pairs of $(n, k)$ is it true that the bishop visits all the light-colored squares?
