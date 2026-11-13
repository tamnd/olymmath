---
tag: MX06R5Q1XK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h42550
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35670
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234188
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1991
    source: hf-ai-mo-aops
    label: 1991 China Team Selection Test
---
For $i = 1,2, \ldots, 1991$ , we choose $n_i$ points and write number $i$ on them (each point has only written one number on it). A set of chords are drawn such that:

(i) They are pairwise non-intersecting.
(ii) The endpoints of each chord have distinct numbers.

If for all possible assignments of numbers the operation can always be done, find the necessary and sufficient condition the numbers $n_1, n_2, \ldots, n_{1991}$ must satisfy for this to be possible.
