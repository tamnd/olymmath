---
tag: ZT8FKMMCQ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A small apartment building has four doors, with door numbers $1, 2, 3, 4.$ John has $2^4-1=15$ keys, label with of possible nonempty subsets of $\{1,2,3,4\}$, but he forgot which key is which. If an element on the key matches the door number, the key can open the door (e.g. key $\{1,2,4\}$ can open Door 4). He picks a key at random and tries to open Door 1, which fails, so he discards it. John then randomly picks one of his remaining 14 keys and tries to open Door 2, but it doesn't open, so he throws away that key as well. He then randomly selects one of the remaining 13 keys, and tests it on Door 3. What is the probability that it will open?
*Proposed by dantx5*
