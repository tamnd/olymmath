---
tag: 79PZVNRY7M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h526572
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9505
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211509
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0005.parquet#row=81
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2013
    source: hf-ai-mo-aops
    label: 2013 Harvard-MIT Mathematics Tournament
  - at: hmmt/2013
    source: hf-mathnet
    label: United States HMMT 2013
---
For an even positive integer $n$ Kevin has a tape of length $4n$ with marks at $-2n,-2n+1,\ldots,2n-1,2n$ . He then randomly picks $n$ points in the set $-n,-n+1,-n+2,\ldots,n-1,n$ and places a stone on each of these points. We call a stone 'stuck' if it is on $2n$ or $-2n$ , or either all the points to the right, or all the points to the left, all contain stones. Then, every minute, Kevin shifts the unstruck stones in the following manner:

- He picks an unstuck stone uniformly at random and then flips a fair coin.
- If the coin came up heads, he then moves that stone and every stone in the largest contiguous set containing that stone one point to the left. If the coin came up tails, he moves every stone in that set one point right instead.
- He repeats until all the stones are stuck.

Let $p_n$ be the probability that at the end of the process there are exactly $k$ stones in the right half. Evaluate $$\dfrac{p_{n-1}-p_{n-2}+p_{n-3}+\ldots+p_3-p_2+p_1}{p_{n-1}+p_{n-2}+p_{n-3}+\ldots+p_3+p_2+p_1}$$ in terms of $n$ .
