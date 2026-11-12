---
tag: WW4H1D5TF1
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=663
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1983
    source: hf-numinamath-1-5
    label: XXXIV OM - II - Problem 6
---
For a given number $ n $, let $ p_n $ denote the probability that when a pair of integers $ k, m $ satisfying the conditions $ 0 \leq k \leq m \leq 2^n $ is chosen at random (each pair is equally likely), the number $ \binom{m}{k} $ is even. Calculate $ \lim_{n\to \infty} p_n $.
