---
tag: WBZGA63ZTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h607568
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9686
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2013
    source: hf-ai-mo-aops
    label: 2013 Iran MO (3rd Round)
---
A subsum of $n$ real numbers $a_1,\dots,a_n$ is a sum of elements of a subset of the set $\{a_1,\dots,a_n\}$ . In other words a subsum is $\epsilon_1a_1+\dots+\epsilon_na_n$ in which for each $1\leq i \leq n$ , $\epsilon_i$ is either $0$ or $1$ .
Years ago, there was a valuable list containing $n$ real not necessarily distinct numbers and their $2^n-1$ subsums. Some mysterious creatures from planet Tarator has stolen the list, but we still have the subsums.
(a) Prove that we can recover the numbers uniquely if all of the subsums are positive.
(b) Prove that we can recover the numbers uniquely if all of the subsums are non-zero.
(c) Prove that there's an example of the subsums for $n=1392$ such that we can not recover the numbers uniquely.

Note: If a subsum is sum of element of two different subsets, it appears twice.
Time allowed for this question was 75 minutes.
