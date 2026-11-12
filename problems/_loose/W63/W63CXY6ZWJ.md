---
tag: W63CXY6ZWJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1814868
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18141
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Arianna and Brianna play a game in which they alternate turns writing numbers on a paper. Before the game begins, a referee randomly selects an integer $N$ with $1 \leq N \leq 2019$ , such that $i$ has probability $\frac{i}{1 + 2 + \dots + 2019}$ of being chosen. First, Arianna writes $1$ on the paper. On any move thereafter, the player whose turn it is writes $a+1$ or $2a$ , where $a$ is any number on the paper, under the conditions that no number is ever written twice and any number written does not exceed $N$ . No number is ever erased. The winner is the person who first writes the number $N$ . Assuming both Arianna and Brianna play optimally, the probability that Brianna wins can be expressed as $\frac{m}{n}$ where $m$ and $n$ are relatively prime positive integers. Compute $m + n.$ *Proposed by Edward Wan*
