---
tag: B1SG2R97YM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinite grid, a square with four vertices lie at $(m, n)$, $(m-1, n)$, $(m,n-1)$, $(m-1, n-1)$ is denoted as cell $(m,n)$ $(m, n \in Z)$. Some marbles are dropped on some cell. Each cell may have more than one marble or have no marble at all. Consider a "move" can be conducted in one of two following ways:
i) Remove one marble from cell $(m,n)$ (if there is marble at that cell), then add one marble to each of cell $(m - 1, n- 2)$ and cell $(m -2, n - 1)$.
ii) Remove two marbles from cell $(m,n)$ (if there is marble at that cell), then add one marble to each of cell $(m +1, n - 2)$ and cell $(m - 2, n +1)$.
Assume that initially, there are $n$ marbles at the cell $(1,n), (2,n - 1),..., (n, 1)$ (each cell contains one marble). Can we conduct an finite amount of moves such that both cells $(n + 1, n)$ and $(n, n + 1)$ have marbles?
