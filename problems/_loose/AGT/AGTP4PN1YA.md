---
tag: AGTP4PN1YA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1984 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h1899493
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27928
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1984 Tournament Of Towns
---
(a) On each square of a squared sheet of paper of size $20 \times 20$ there is a soldier. Vanya chooses a number $d$ and Petya moves the soldiers to new squares in such a way that each soldier is moved through a distance of at least $d$ (the distance being measured between the centres of the initial and the new squares) and each square is occupied by exactly one soldier. For which $d$ is this possible?
(Give the maximum possible $d$ , prove that it is possible to move the soldiers through distances not less than $d$ and prove that there is no greater $d$ for which this procedure may be carried out.)
(b) Answer the same question as (a), but with a sheet of size $21 \times 21$ .

(SS Krotov, Moscow)
