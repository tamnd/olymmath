---
tag: JCWMZSXQND
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=43207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Natural numbers $a, b$ and $c$ are pairwise coprime. The sequence of numbers $a, 2a, 3a, \ldots, b, 2b, 3b, \ldots, c, 2c, 3c, \ldots$ is ordered in ascending order. A new finite sequence is then constructed from the ordered sequence, consisting of ones and twos according to the following rule. Instead of a number that appears once in the sequence, a 1 is written, and instead of a pair of identical numbers, a 2 is written. When three identical numbers are encountered, the process stops. For example, for the numbers $2, 3, 5$, the sequence 111121122121221121111 is constructed. Find the numbers $a, b, c$, if the sequence constructed from them consists of 356 ones and 36 twos and its beginning looks like this: $11111111111111112 \ldots$
