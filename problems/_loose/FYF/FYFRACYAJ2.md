---
tag: FYFRACYAJ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516648
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10070
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
In a tennis tournament, each competitor plays against every other competitor, and there are no draws. Call a group of four tennis players ``ordered'' if there is a clear winner and a clear loser (i.e., one person who beat the other three, and one person who lost to the other three.) Find the smallest integer $n$ for which any tennis tournament with $n$ people has a group of four tennis players that is ordered.

*Ray Li*
