---
tag: 179SC3AXGZ
kind: problem
type: answer
answer: "223"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set $S$ of positive integers is $\textit{sum-complete}$ if there are positive integers $m$ and $n$ such that an integer $a$ is the sum of the elements of some nonempty subset of $S$ if and only if $m \le a \le n$.

Let $S$ be a sum-complete set such that $\{1, 3\} \subset S$ and $|S| = 8$. Find the greatest possible value of the sum of the elements of $S$.

*Proposed by Michael Tang*
