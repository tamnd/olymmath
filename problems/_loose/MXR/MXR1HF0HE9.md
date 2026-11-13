---
tag: MXR1HF0HE9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Serbia National Math Olympiad
    url: https://artofproblemsolving.com/community/c6h473842
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8721
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210776
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rs-smo/2012
    source: hf-ai-mo-aops
    label: 2012 Serbia National Math Olympiad
---
We are given $n>1$ piles of coins. There are two different types of coins: real and fake coins; they all look alike, but coins of the same type have the same mass, while the coins from different types have different masses. Coins that belong to the same pile are of the same type. We know the mass of real coin.

Find the minimal number of weightings on digital scale that we need in order to conclude: which piles consists of which type of coins and also the mass of fake coin.

(We assume that every pile consists from infinite number of coins.)
