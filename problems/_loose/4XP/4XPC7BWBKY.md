---
tag: 4XPC7BWBKY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Dutch Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3285255
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49014
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85783
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nl-nwo/2023
    source: hf-ai-mo-aops
    label: 2023 Dutch Mathematical Olympiad
---
In a room there are $2023$ vases numbered from $1$ to $2023$ . In each vase we want to put a note with a positive integer from $1$ , $2$ $...$ , $2023$ on it. The numbers on the notes do not necessarily have to be distinct. The following should now apply to each vase. Look at the note inside the vase, find the (not necessarily different) vase with the number written on the note, and look at the note inside this vase. Then the average of the numbers on the two notes must be exactly equal to the number of the first selected vase. For example, if we put a note with the number $5$ in vase $13$ , then vase $5$ should contain a note with the number $21$ on it: after all, the average of $5$ and $ 21$ is $13$ . Determine all possible ways to provide each vase with a note.
