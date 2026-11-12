---
tag: G8DGJHPSAX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Belarusian National Olympiad
    url: https://artofproblemsolving.com/community/c6h3537265
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2025
    source: hf-ai-mo-aops
    label: 2025 Belarusian National Olympiad
---
For a sequence of zeros and ones Vasya makes move of the following form until the process doesn't halt
1. If the first digit of the sequence is zero, this digit is erased.
2. If the first digit is one and there are at least two digits, Vasya swaps first two digits, reverses the sequence and replaces ones with zeros and zeros with ones.
3. If the sequence is empty or consists of a single one, the process stops.
Find the number of sequences of length 2025 starting from which Vasya can get to the empty sequence.
*M. Zorka*
