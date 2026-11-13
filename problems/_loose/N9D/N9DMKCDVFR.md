---
tag: N9DMKCDVFR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h482052
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8403
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2012
    source: hf-ai-mo-aops
    label: 2012 Olympic Revenge
---
Say that two sets of positive integers $S, T$ are $\emph{k-equivalent}$ if the sum of the $i$ th powers of elements of $S$ equals the sum of the $i$ th powers of elements of $T$ , for each $i= 1, 2, \ldots, k$ . Given $k$ , prove that there are infinitely many numbers $N$ such that $\{1,2,\ldots,N^{k+1}\}$ can be divided into $N$ subsets, all of which are $k$ -equivalent to each other.
