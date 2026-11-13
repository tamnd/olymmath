---
tag: DDEN76F4P5
kind: problem
type: answer
answer: n = 198
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set $S$ of integers is Balearic, if there are two (not necessarily distinct) elements
$s,s'\in S$ whose sum $s+s'$ is a power of two; otherwise it is called a non-Balearic set.
Find an integer $n$ such that $\{1,2,\ldots,n\}$ contains a 99-element non-Balearic set,
whereas all the 100-element subsets are Balearic.
