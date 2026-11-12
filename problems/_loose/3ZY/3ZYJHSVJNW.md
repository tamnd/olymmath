---
tag: 3ZYJHSVJNW
kind: problem
type: answer
answer: "4373"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52490
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) The "Tower of Hanoi" puzzle consists of eight disks of decreasing size placed on one of three pegs. The goal is to move the entire tower to another peg, moving only one disk at a time and never placing a larger disk on a smaller one. Prove that the puzzle has a solution.

What method would be optimal (in terms of the number of moves)?

b) Let's number the pegs 1, 2, and 3. The task is to move the disks from peg 1 to peg 3. How many moves will be required if direct moves from peg 1 to peg 3 and from peg 3 to peg 1 are prohibited (each move must be made via the 2nd peg)?

c) How many moves will be required if, in addition to the conditions in part a), there is an additional requirement that the first (smallest) disk cannot be placed on the 2nd peg?
