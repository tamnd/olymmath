---
tag: JVN4SBFSA8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2034305
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38728
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236074
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2003
    source: hf-ai-mo-aops
    label: 2003 Estonia National Olympiad
---
On a lottery ticket a player has to mark $6$ numbers from $36$ . Then $6$ numbers from these $36$ are drawn randomly and the ticket wins if none of the numbers that came out is marked on the ticket. Prove that
a) it is possible to mark the numbers on $9$ tickets so that one of these tickets always wins,
b) it is not possible to mark the numbers on $8$ tickets so that one of tickets always wins.
