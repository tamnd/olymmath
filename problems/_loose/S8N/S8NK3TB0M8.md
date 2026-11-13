---
tag: S8NK3TB0M8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h219902
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25287
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1995
    source: hf-ai-mo-aops
    label: 1995 IMO Shortlist
---
Does there exist a sequence $ F(1), F(2), F(3), \ldots$ of non-negative integers that simultaneously satisfies the following three conditions?

**(a)** Each of the integers $ 0, 1, 2, \ldots$ occurs in the sequence.
**(b)** Each positive integer occurs in the sequence infinitely often.
**(c)** For any $ n \geq 2,$
$$ F(F(n^{163})) = F(F(n)) + F(F(361)).
$$
