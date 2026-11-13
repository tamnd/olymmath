---
tag: YNTTM0JRJM
kind: problem
type: answer
answer: "255"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102376
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0003.parquet#row=200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$5 N$ teams participated in a national basketball championship in which every two teams played exactly one game. Of the $N$ teams, 251 are from California. It turned out that a Californian team Alcatraz is the unique Californian champion (Alcatraz has won more games against Californian teams than any other team from California). However, Alcatraz ended up being the unique loser of the tournament because it lost more games than any other team in the nation!
What is the smallest possible value for $N$ ?
