---
tag: GV4HXYX0V0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h517881
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9937
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Tim is participating in the following three math contests. On each contest his score is the number of correct answers.
$\bullet$ The Local Area Inspirational Math Exam consists of 15 problems.
$\bullet$ The Further Away Regional Math League has 10 problems.
$\bullet$ The Distance-Optimized Math Open has 50 problems.
For every positive integer $n$ , Tim knows the answer to the $n$ th problems on each contest (which are pairwise distinct), if they exist; however, these answers have been randomly permuted so that he does not know which answer corresponds to which contest. Unaware of the shuffling, he competes with his modified answers. Compute the expected value of the sum of his scores on all three contests.

*Proposed by Evan Chen*
