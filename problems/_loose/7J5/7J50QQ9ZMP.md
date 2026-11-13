---
tag: 7J50QQ9ZMP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h2508675
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19878
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221396
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2021
    source: hf-ai-mo-aops
    label: 2021 Canadian Mathematical Olympiad Qualification
---
King Radford of Peiza is hosting a banquet in his palace. The King has an enormous circular table with $2021$ chairs around it. At The King's birthday celebration, he is sitting in his throne (one of the $2021$ chairs) and the other $2020$ chairs are filled with guests, with the shortest guest sitting to the King's left and the remaining guests seated in increasing order of height from there around the table. The King announces that everybody else must get up from their chairs, run around the table, and sit back down in some chair. After doing this, The King notices that the person seated to his left is different from the person who was previously seated to his left. Each other person at the table also notices that the person sitting to their left is different.

Find a closed form expression for the number of ways the people could be sitting around the table at the end. You may use the notation $D_{n},$ the number of derangements of a set of size $n$ , as part of your expression.
