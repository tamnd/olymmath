---
tag: FFRQAES7FH
kind: problem
type: answer
answer: S_{}=n^2(2n+1),\quadS_{\max}=\frac{n}{3}(2n+1)(4n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$2 n+1$ players $A_{1}, A_{2}, \cdots, A_{2 n+1}$ participate in a round-robin chess tournament, where each player plays one game against each of the other $2 n$ players, with no draws. Let $w_{i}$ be the number of games won by $A_{i}$. Find the minimum and maximum values of $S=\sum_{i=1}^{2 n+1} w_{i}^{2}$.
