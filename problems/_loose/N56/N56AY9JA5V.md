---
tag: N56AY9JA5V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h420679
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5722
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2010
    source: hf-ai-mo-aops
    label: 2010 Stanford Mathematics Tournament
---
A series of lockers, numbered 1 through 100, are all initially closed. Student 1 goes through and opens every locker. Student 3 goes through and "flips" every 3rd locker ("fipping") a locker means changing its state: if the locker is open he closes it, and if the locker is closed he opens it. Student 5 then goes through and "flips" every 5th locker. This process continues with all students with odd numbers $n < 100$ going through and "flipping" every $n$ th locker. How many lockers are open after this process?
