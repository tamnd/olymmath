---
tag: BPXAE6AG25
kind: problem
type: answer
answer: "2500"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Juku has the first 100 volumes of the Harrie Totter book series at his home. For every $i$ and $j$, where $1 \le i < j \le 100$, call the pair $(i, j)$ *reversed* if volume No $j$ is before volume No $i$ on Juku's shelf. Juku wants to arrange all volumes of the series to one row on his shelf in such a way that there does not exist numbers $i, j, k$, where $1 \le i < j < k \le 100$, such that pairs $(i, j)$ and $(j, k)$ are both reversed. Find the largest number of reversed pairs that can occur under this condition.
