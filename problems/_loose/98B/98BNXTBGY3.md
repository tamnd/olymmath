---
tag: 98BNXTBGY3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2151389
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29784
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2011
    source: hf-ai-mo-aops
    label: 2011 Argentina National Olympiad
---
We have a square of side $1$ and a number $\ell$ such that $0 <\ell <\sqrt2$ . Two players $A$ and $B$ , in turn, draw in the square an open segment (without its two ends) of length $\ell $ , starts A. Each segment after the first cannot have points in common with the previously drawn segments. He loses the player who cannot make his play. Determine if either player has a winning strategy.
