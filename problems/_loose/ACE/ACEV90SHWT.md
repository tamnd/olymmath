---
tag: ACEV90SHWT
kind: problem
type: answer
answer: "63"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anne and Bill decide to play a game together. At the beginning, they chose a positive integer $n$; then, starting from a positive integer $\mathcal{N}_0$, Anne subtracts to $\mathcal{N}_0$ an integer $k$-th power (possibly $0$) of $n$ less than or equal to $\mathcal{N}_0$. The resulting number $\mathcal{N}_1=\mathcal{N}_0-n^k$ is then passed to Bill, who repeats the same process starting from $\mathcal{N}_1$: he subtracts to $\mathcal{N}_1$ an integer $j$-th power of $n$ less than or equal to $\mathcal{N}_1$, and he then gives the resulting number $\mathcal{N}_2=\mathcal{N}_1-n^j$ to Anne. The game continues like that until one player gets $0$ as the result of his operation, winning the game. For each $1\leq n \leq 1000$, let $f(n)$ be the number of integers $1\leq \mathcal{N}_0\leq 5000$ such that Anne has a winning strategy starting from them. For how many values of $n$ we have that $f(n)\geq 2520$?

[I]Proposed by **FedeX333X**[/I]
