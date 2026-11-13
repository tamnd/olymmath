---
tag: KDCZ79DDNC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h391340
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5956
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
Merlin summons the $n$ knights of Camelot for a conference. Each day, he assigns them to the $n$ seats at the Round Table. From the second day on, any two neighbours may interchange their seats if they were not neighbours on the first day. The knights try to sit in some cyclic order which has already occurred before on an earlier day. If they succeed, then the conference comes to an end when the day is over. What is the maximum number of days for which Merlin can guarantee that the conference will last?
