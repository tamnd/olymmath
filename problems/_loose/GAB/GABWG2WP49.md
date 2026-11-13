---
tag: GABWG2WP49
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h2818588
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61164
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253167
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan TST Round 2
---
A positive integer is said to be **palindromic** if it remains the same when its digits are reversed. For example, $1221$ or $74847$ are both palindromic numbers.
Let $k$ be a positive integer that can be expressed as an $n$ -digit number $\overline{a_{n-1}a_{n-2} \cdots a_0}$ . Prove that if $k$ is a palindromic number, then $k^2$ is also a palindromic number if and only if $a_0^2 + a^2_1 + \cdots + a^2_{n-1} < 10$ .

*Proposed by Ho-Chien Chen*
