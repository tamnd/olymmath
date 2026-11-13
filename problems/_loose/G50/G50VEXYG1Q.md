---
tag: G50VEXYG1Q
kind: problem
type: answer
answer: \binom{2n-1}{n}if2\nmidn,\binom{2n-1}{n}-2\binom{3n/2-1}{n}if2\midn
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Around a round table, $n>2$ students are sitting. At the beginning, each student has exactly one candy. In each step, each student chooses one of the following two operations:

(i) gives one of their candies to the student to their left or to the student to their right;

(ii) divides all their candies into two sets (not necessarily non-empty) and gives one set to the student to their left and the other to the student to their right.

All operations in one step are performed simultaneously. A distribution of candies is called reachable if it can be obtained in a finite number of steps. How many reachable distributions are there?

(Two distributions are different if at least one student has a different number of candies in them.)

(Kunap)
